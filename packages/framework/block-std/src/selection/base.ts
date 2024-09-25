import { ErrorCode, LumenSuiteError } from '@lumensuite/global/exceptions';

type SelectionConstructor<T = unknown> = {
  type: string;
  group: string;
  new (...args: unknown[]): T;
};

export type BaseSelectionOptions = {
  blockId: string;
};

export abstract class BaseSelection {
  static readonly group: string;

  static readonly type: string;

  readonly blockId: string;

  get group(): string {
    return (this.constructor as SelectionConstructor).group;
  }

  get type(): LumenSuite.SelectionType {
    return (this.constructor as SelectionConstructor)
      .type as LumenSuite.SelectionType;
  }

  constructor({ blockId }: BaseSelectionOptions) {
    this.blockId = blockId;
  }

  static fromJSON(_: Record<string, unknown>): BaseSelection {
    throw new LumenSuiteError(
      ErrorCode.SelectionError,
      'You must override this method'
    );
  }

  abstract equals(other: BaseSelection): boolean;

  is<T extends LumenSuite.SelectionType>(
    type: T
  ): this is LumenSuite.SelectionInstance[T] {
    return this.type === type;
  }

  abstract toJSON(): Record<string, unknown>;
}
