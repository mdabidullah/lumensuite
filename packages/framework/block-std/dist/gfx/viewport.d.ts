import { Bound, type IPoint, type IVec, Slot } from '@lumensuite/global/utils';
export declare const ZOOM_MAX = 6;
export declare const ZOOM_MIN = 0.1;
export declare class Viewport {
    protected _center: IPoint;
    protected _el: HTMLElement;
    protected _height: number;
    protected _left: number;
    protected _locked: boolean;
    protected _rafId: number | null;
    protected _top: number;
    protected _width: number;
    protected _zoom: number;
    sizeUpdated: Slot<{
        width: number;
        height: number;
        left: number;
        top: number;
    }>;
    viewportMoved: Slot<IVec>;
    viewportUpdated: Slot<{
        zoom: number;
        center: IVec;
    }>;
    ZOOM_MAX: number;
    ZOOM_MIN: number;
    get boundingClientRect(): DOMRect;
    get center(): IPoint;
    get centerX(): number;
    get centerY(): number;
    get height(): number;
    get left(): number;
    get locked(): boolean;
    set locked(locked: boolean);
    /**
     * Note this is different from the zoom property.
     * The editor itself may be scaled by outer container which is common in nested editor scenarios.
     * This property is used to calculate the scale of the editor.
     */
    get scale(): number;
    get top(): number;
    get translateX(): number;
    get translateY(): number;
    get viewportBounds(): Bound;
    get viewportMaxXY(): {
        x: number;
        y: number;
    };
    get viewportMinXY(): {
        x: number;
        y: number;
    };
    get viewportX(): number;
    get viewportY(): number;
    get width(): number;
    get zoom(): number;
    applyDeltaCenter(deltaX: number, deltaY: number): void;
    dispose(): void;
    isInViewport(bound: Bound): boolean;
    onResize(): void;
    setCenter(centerX: number, centerY: number): void;
    setRect(left: number, top: number, width: number, height: number): void;
    setViewport(newZoom: number, newCenter?: IVec, smooth?: boolean): void;
    setViewportByBound(bound: Bound, padding?: [number, number, number, number], smooth?: boolean): void;
    setViewportElm(elm: HTMLElement): void;
    setZoom(zoom: number, focusPoint?: IPoint): void;
    smoothTranslate(x: number, y: number): void;
    smoothZoom(zoom: number, focusPoint?: IPoint): void;
    toModelBound(bound: Bound): Bound;
    toModelCoord(viewX: number, viewY: number): IVec;
    toModelCoordFromClientCoord([x, y]: IVec): IVec;
    toViewBound(bound: Bound): Bound;
    toViewCoord(modelX: number, modelY: number): IVec;
    toViewCoordFromClientCoord([x, y]: IVec): IVec;
}
//# sourceMappingURL=viewport.d.ts.map