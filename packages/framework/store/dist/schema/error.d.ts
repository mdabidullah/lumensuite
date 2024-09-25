import { LumenSuiteError } from '@lumensuite/global/exceptions';
export declare class MigrationError extends LumenSuiteError {
    constructor(description: string);
}
export declare class SchemaValidateError extends LumenSuiteError {
    constructor(flavour: string, message: string);
}
//# sourceMappingURL=error.d.ts.map