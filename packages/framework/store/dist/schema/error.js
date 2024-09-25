import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
export class MigrationError extends LumenSuiteError {
    constructor(description) {
        super(ErrorCode.MigrationError, `Migration failed. Please report to https://github.com/toeverything/lumensuite/issues
          ${description}`);
    }
}
export class SchemaValidateError extends LumenSuiteError {
    constructor(flavour, message) {
        super(ErrorCode.SchemaValidateError, `Invalid schema for ${flavour}: ${message}`);
    }
}
//# sourceMappingURL=error.js.map