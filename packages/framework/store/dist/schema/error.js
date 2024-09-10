import { BlockSuiteError, ErrorCode } from '@blocksuite/global/exceptions';
export class MigrationError extends BlockSuiteError {
    constructor(description) {
        super(ErrorCode.MigrationError, `Migration failed. Please report to https://github.com/toeverything/blocksuite/issues
          ${description}`);
    }
}
export class SchemaValidateError extends BlockSuiteError {
    constructor(flavour, message) {
        super(ErrorCode.SchemaValidateError, `Invalid schema for ${flavour}: ${message}`);
    }
}
//# sourceMappingURL=error.js.map