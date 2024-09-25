import type { BlockModel } from '@lumensuite/store';
import type { StaticValue } from 'lit/static-html.js';
export type BlockCommands = Partial<LumenSuite.Commands>;
export type BlockViewType = StaticValue | ((model: BlockModel) => StaticValue);
export type WidgetViewMapType = Record<string, StaticValue>;
//# sourceMappingURL=type.d.ts.map