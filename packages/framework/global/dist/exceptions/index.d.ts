import type { ErrorCode } from './code.js';
export declare class BlockSuiteError extends Error {
    code: ErrorCode;
    isFatal: boolean;
    constructor(code: ErrorCode, message: string);
}
export declare function handleError(error: Error): void;
export * from './code.js';
//# sourceMappingURL=index.d.ts.map