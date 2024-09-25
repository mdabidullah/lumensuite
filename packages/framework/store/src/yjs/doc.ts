import type { Transaction } from 'yjs';

import * as Y from 'yjs';

import { createYProxy } from '../reactive/proxy.js';

export type LumenSuiteDocAllowedValue =
  | Record<string, unknown>
  | unknown[]
  | Y.Text;
export type LumenSuiteDocData = Record<string, LumenSuiteDocAllowedValue>;

export class LumenSuiteDoc extends Y.Doc {
  private _spaces: Y.Map<Y.Doc> = this.getMap('spaces');

  get spaces() {
    return this._spaces;
  }

  getArrayProxy<
    Key extends keyof LumenSuiteDocData & string,
    Value extends unknown[] = LumenSuiteDocData[Key] extends unknown[]
      ? LumenSuiteDocData[Key]
      : never,
  >(key: Key): Value {
    const array = super.getArray(key);
    return createYProxy(array) as Value;
  }

  getMapProxy<
    Key extends keyof LumenSuiteDocData & string,
    Value extends Record<
      string,
      unknown
    > = LumenSuiteDocData[Key] extends Record<string, unknown>
      ? LumenSuiteDocData[Key]
      : never,
  >(key: Key): Value {
    const map = super.getMap(key);
    return createYProxy(map);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  override toJSON(): Record<string, any> {
    const json = super.toJSON();
    delete json.spaces;
    const spaces: Record<string, unknown> = {};
    this.spaces.forEach((doc, key) => {
      spaces[key] = doc.toJSON();
    });
    return {
      ...json,
      spaces,
    };
  }

  override transact<T>(f: (arg0: Transaction) => T, origin?: number | string) {
    return super.transact(f, origin);
  }
}
