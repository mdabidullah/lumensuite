import { ErrorCode, LumenSuiteError } from '@lumensuite/global/exceptions';

export class MigrationError extends LumenSuiteError {
  constructor(description: string) {
    super(
      ErrorCode.MigrationError,
      `Migration failed. Please report to https://github.com/toeverything/lumensuite/issues
          ${description}`
    );
  }
}

export class SchemaValidateError extends LumenSuiteError {
  constructor(flavour: string, message: string) {
    super(
      ErrorCode.SchemaValidateError,
      `Invalid schema for ${flavour}: ${message}`
    );
  }
}
