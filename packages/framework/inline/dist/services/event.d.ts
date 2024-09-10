import type { InlineEditor } from '../inline-editor.js';
import { type BaseTextAttributes } from '../utils/index.js';
export declare class EventService<TextAttributes extends BaseTextAttributes> {
    readonly editor: InlineEditor<TextAttributes>;
    private _compositionInlineRange;
    private _isComposing;
    private _isRangeCompletelyInRoot;
    private _onBeforeInput;
    private _onClick;
    private _onCompositionEnd;
    private _onCompositionStart;
    private _onCompositionUpdate;
    private _onKeyDown;
    private _onSelectionChange;
    private _previousAnchor;
    private _previousFocus;
    mount: () => void;
    get inlineRangeProvider(): import("../inline-editor.js").InlineRangeProvider | null;
    get isComposing(): boolean;
    constructor(editor: InlineEditor<TextAttributes>);
}
//# sourceMappingURL=event.d.ts.map