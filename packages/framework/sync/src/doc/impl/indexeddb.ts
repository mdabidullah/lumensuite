import { type DBSchema, type IDBPDatabase, openDB } from 'idb';
import { diffUpdate, encodeStateVectorFromUpdate, mergeUpdates } from 'yjs';

import type { DocSource } from '../source.js';

export const dbVersion = 1;
export const DEFAULT_DB_NAME = 'lumensuite-local';

type UpdateMessage = {
  timestamp: number;
  update: Uint8Array;
};

type DocCollectionPersist = {
  id: string;
  updates: UpdateMessage[];
};

interface LumenSuiteBinaryDB extends DBSchema {
  collection: {
    key: string;
    value: DocCollectionPersist;
  };
}

export function upgradeDB(db: IDBPDatabase<LumenSuiteBinaryDB>) {
  db.createObjectStore('collection', { keyPath: 'id' });
}

type ChannelMessage = {
  type: 'db-updated';
  payload: { docId: string; update: Uint8Array };
};

export class IndexedDBDocSource implements DocSource {
  // indexeddb could be shared between tabs, so we use broadcast channel to notify other tabs
  channel = new BroadcastChannel('indexeddb:' + this.dbName);

  dbPromise: Promise<IDBPDatabase<LumenSuiteBinaryDB>> | null = null;

  mergeCount = 1;

  name = 'indexeddb';

  constructor(readonly dbName: string = DEFAULT_DB_NAME) {}

  getDb() {
    if (this.dbPromise === null) {
      this.dbPromise = openDB<LumenSuiteBinaryDB>(this.dbName, dbVersion, {
        upgrade: upgradeDB,
      });
    }
    return this.dbPromise;
  }

  async pull(
    docId: string,
    state: Uint8Array
  ): Promise<{ data: Uint8Array; state?: Uint8Array | undefined } | null> {
    const db = await this.getDb();
    const store = db
      .transaction('collection', 'readonly')
      .objectStore('collection');
    const data = await store.get(docId);

    if (!data) {
      return null;
    }

    const { updates } = data;
    const update = mergeUpdates(updates.map(({ update }) => update));

    const diff = state.length ? diffUpdate(update, state) : update;

    return { data: diff, state: encodeStateVectorFromUpdate(update) };
  }

  async push(docId: string, data: Uint8Array): Promise<void> {
    const db = await this.getDb();
    const store = db
      .transaction('collection', 'readwrite')
      .objectStore('collection');

    const { updates } = (await store.get(docId)) ?? { updates: [] };
    let rows: UpdateMessage[] = [
      ...updates,
      { timestamp: Date.now(), update: data },
    ];
    if (this.mergeCount && rows.length >= this.mergeCount) {
      const merged = mergeUpdates(rows.map(({ update }) => update));
      rows = [{ timestamp: Date.now(), update: merged }];
    }
    await store.put({
      id: docId,
      updates: rows,
    });
    this.channel.postMessage({
      type: 'db-updated',
      payload: { docId, update: data },
    } satisfies ChannelMessage);
  }

  subscribe(cb: (docId: string, data: Uint8Array) => void) {
    function onMessage(event: MessageEvent<ChannelMessage>) {
      const { type, payload } = event.data;
      if (type === 'db-updated') {
        const { docId, update } = payload;
        cb(docId, update);
      }
    }
    this.channel.addEventListener('message', onMessage);
    return () => {
      this.channel.removeEventListener('message', onMessage);
    };
  }
}
