import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import { type TemplateResult } from 'lit';
import * as Y from 'yjs';
import type { VLine } from './components/v-line.js';
import type { DeltaInsert, InlineRange, InlineRangeUpdatedProp } from './types.js';
import { InlineHookService } from './services/hook.js';
import { AttributeService, DeltaService, EventService, RangeService } from './services/index.js';
import { type BaseTextAttributes, nativePointToTextPoint, textPointToDomPoint } from './utils/index.js';
import { getTextNodesFromElement } from './utils/text.js';
export type InlineRootElement<T extends BaseTextAttributes = BaseTextAttributes> = HTMLElement & {
    inlineEditor: InlineEditor<T>;
};
export interface InlineRangeProvider {
    inlineRangeUpdated: Slot<InlineRangeUpdatedProp>;
    getInlineRange(): InlineRange | null;
    setInlineRange(inlineRange: InlineRange | null, sync: boolean): void;
}
export declare class InlineEditor<TextAttributes extends BaseTextAttributes = BaseTextAttributes> {
    static getTextNodesFromElement: typeof getTextNodesFromElement;
    static nativePointToTextPoint: typeof nativePointToTextPoint;
    static textPointToDomPoint: typeof textPointToDomPoint;
    private _attributeService;
    private _deltaService;
    private _disposables;
    private _eventService;
    private _eventSource;
    private _hooksService;
    private _isReadonly;
    private _mounted;
    private _onYTextChange;
    private _rangeService;
    private _rootElement;
    private _textService;
    private readonly _yText;
    deleteText: (inlineRange: InlineRange) => void;
    focusEnd: () => void;
    focusIndex: (index: number) => void;
    focusStart: () => void;
    formatText: (inlineRange: InlineRange, attributes: TextAttributes, options?: {
        match?: (delta: DeltaInsert, deltaInlineRange: InlineRange) => boolean;
        mode?: "replace" | "merge";
    }) => void;
    getDeltaByRangeIndex: (rangeIndex: number) => DeltaInsert<TextAttributes> | null;
    getDeltasByInlineRange: (inlineRange: InlineRange) => import("./types.js").DeltaEntry<TextAttributes>[];
    getFormat: (inlineRange: InlineRange, loose?: boolean) => TextAttributes;
    getInlineRange: () => InlineRange | null;
    getInlineRangeFromElement: (element: Element) => InlineRange | null;
    getLine: (rangeIndex: InlineRange["index"]) => {
        line: VLine;
        lineIndex: number;
        rangeIndexRelatedToLine: number;
    } | null;
    getNativeSelection: () => Selection | null;
    getTextPoint: (rangeIndex: InlineRange["index"]) => import("./types.js").TextPoint | null;
    readonly inlineRangeProvider: InlineRangeProvider | null;
    insertLineBreak: (inlineRange: InlineRange) => void;
    insertText: (inlineRange: InlineRange, text: string, attributes?: TextAttributes) => void;
    readonly isEmbed: (delta: DeltaInsert<TextAttributes>) => boolean;
    isFirstLine: (inlineRange: InlineRange | null) => boolean;
    isLastLine: (inlineRange: InlineRange | null) => boolean;
    isValidInlineRange: (inlineRange: InlineRange | null) => boolean;
    mapDeltasInInlineRange: <Result>(inlineRange: InlineRange, callback: (delta: DeltaInsert<TextAttributes>, rangeIndex: number, deltaIndex: number) => Result) => Result[];
    resetMarks: () => void;
    resetText: (inlineRange: InlineRange) => void;
    selectAll: () => void;
    setAttributeRenderer: (renderer: import("./types.js").AttributeRenderer<TextAttributes>) => void;
    setAttributeSchema: (schema: import("zod").ZodType<TextAttributes, import("zod").ZodTypeDef, unknown>) => void;
    setInlineRange: (inlineRange: InlineRange | null, sync?: boolean) => void;
    setMarks: (marks: TextAttributes) => void;
    setText: (text: string, attributes?: TextAttributes) => void;
    readonly slots: {
        mounted: Slot<void>;
        unmounted: Slot<void>;
        textChange: Slot<void>;
        render: Slot<void>;
        renderComplete: Slot<void>;
        inlineRangeUpdate: Slot<InlineRangeUpdatedProp>;
        inlineRangeApply: Slot<Range>;
        /**
         * Corresponding to the `compositionUpdate` and `beforeInput` events, and triggered only when the `inlineRange` is not null.
         */
        inputting: Slot<void>;
        /**
         * Triggered only when the `inlineRange` is not null.
         */
        keydown: Slot<KeyboardEvent>;
    };
    syncInlineRange: () => void;
    toDomRange: (inlineRange: InlineRange) => Range | null;
    toInlineRange: (range: Range) => InlineRange | null;
    readonly vLineRenderer: ((vLine: VLine) => TemplateResult) | null;
    get attributeService(): AttributeService<TextAttributes>;
    get deltaService(): DeltaService<TextAttributes>;
    get disposables(): DisposableGroup;
    get eventService(): EventService<TextAttributes>;
    get eventSource(): HTMLElement | null;
    get hooks(): {
        beforeinput?: ((props: import("./services/hook.js").BeforeinputHookCtx<TextAttributes>) => void) | undefined;
        compositionEnd?: ((props: import("./services/hook.js").CompositionEndHookCtx<TextAttributes>) => void) | undefined;
    };
    get isComposing(): boolean;
    get isReadonly(): boolean;
    get marks(): TextAttributes | null;
    get mounted(): boolean;
    get rangeService(): RangeService<TextAttributes>;
    get rootElement(): InlineRootElement<TextAttributes>;
    get yText(): Y.Text;
    get yTextDeltas(): any;
    get yTextLength(): number;
    get yTextString(): string;
    constructor(yText: InlineEditor['yText'], ops?: {
        isEmbed?: (delta: DeltaInsert<TextAttributes>) => boolean;
        hooks?: InlineHookService<TextAttributes>['hooks'];
        inlineRangeProvider?: InlineRangeProvider;
        vLineRenderer?: (vLine: VLine) => TemplateResult;
    });
    private _bindYTextObserver;
    mount(rootElement: HTMLElement, eventSource?: HTMLElement, isReadonly?: boolean): void;
    requestUpdate(syncInlineRange?: boolean): void;
    rerenderWholeEditor(): void;
    setReadonly(isReadonly: boolean): void;
    transact(fn: () => void): void;
    unmount(): void;
    waitForUpdate(): Promise<void>;
}
//# sourceMappingURL=inline-editor.d.ts.map