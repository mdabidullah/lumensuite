import type { PropertyValues } from 'lit';
import { type MenuOptions } from '@lumensuite/affine-components/context-menu';
import { ShadowlessElement } from '@lumensuite/block-std';
import type { SingleView } from '../../view-manager/single-view.js';
import { KanbanSingleView } from '../../../view-presets/kanban/kanban-view-manager.js';
import { TableSingleView } from '../../../view-presets/table/table-view-manager.js';
declare const GroupSetting_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class GroupSetting extends GroupSetting_base {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected render(): unknown;
    accessor groupContainer: HTMLElement;
    accessor view: TableSingleView | KanbanSingleView;
}
export declare const selectGroupByProperty: (view: SingleView, onClose?: () => void) => MenuOptions;
export declare const popSelectGroupByProperty: (target: HTMLElement, view: SingleView, onClose?: () => void) => void;
export declare const popGroupSetting: (target: HTMLElement, view: SingleView, onBack: () => void) => void;
export {};
//# sourceMappingURL=setting.d.ts.map