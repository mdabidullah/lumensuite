import { type ReferenceElement } from '@floating-ui/dom';
import type { SingleView } from '../../view-manager/single-view.js';
export declare const popSideDetail: (ops: {
    target: ReferenceElement;
    view: SingleView;
    rowId: string;
    onClose?: () => void;
}) => void;
export declare const createRecordDetail: (ops: {
    view: SingleView;
    rowId: string;
}) => import("lit").TemplateResult<1>;
//# sourceMappingURL=layout.d.ts.map