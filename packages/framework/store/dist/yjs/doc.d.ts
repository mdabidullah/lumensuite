import type { Transaction } from 'yjs';
import * as Y from 'yjs';
export type LumenSuiteDocAllowedValue = Record<string, unknown> | unknown[] | Y.Text;
export type LumenSuiteDocData = Record<string, LumenSuiteDocAllowedValue>;
export declare class LumenSuiteDoc extends Y.Doc {
    private _spaces;
    get spaces(): Y.Map<Y.Doc>;
    getArrayProxy<Key extends keyof LumenSuiteDocData & string, Value extends unknown[] = LumenSuiteDocData[Key] extends unknown[] ? LumenSuiteDocData[Key] : never>(key: Key): Value;
    getMapProxy<Key extends keyof LumenSuiteDocData & string, Value extends Record<string, unknown> = LumenSuiteDocData[Key] extends Record<string, unknown> ? LumenSuiteDocData[Key] : never>(key: Key): Value;
    toJSON(): Record<string, any>;
    transact<T>(f: (arg0: Transaction) => T, origin?: number | string): T;
}
//# sourceMappingURL=doc.d.ts.map