import type { ErrorCode } from './code.js';

export class LumenSuiteError extends Error {
  code: ErrorCode;

  isFatal: boolean;

  constructor(code: ErrorCode, message: string) {
    super(message);
    this.name = 'LumenSuiteError';
    this.code = code;
    this.isFatal = code >= 10000;
  }
}

export function handleError(error: Error) {
  if (!(error instanceof LumenSuiteError)) {
    throw error;
  }

  if (error.isFatal) {
    throw new Error(
      'A fatal error for LumenSuite occurs, please contact the team if you find this.',
      { cause: error }
    );
  }

  console.error(
    "A runtime error for LumenSuite occurs, you can ignore this error if it won't break the user experience."
  );
  console.error(error.stack);
}

export * from './code.js';
