import type { BlockService } from '../../extension/index.js';
import type { GfxBlockElementModel } from '../../gfx/index.js';
import { BlockComponent } from './block-component.js';
export declare function isGfxBlockComponent(element: unknown): element is GfxBlockComponent;
export declare const GfxElementSymbol: unique symbol;
export declare abstract class GfxBlockComponent<Model extends GfxBlockElementModel = GfxBlockElementModel, Service extends BlockService = BlockService, WidgetName extends string = string> extends BlockComponent<Model, Service, WidgetName> {
    [GfxElementSymbol]: boolean;
    get gfx(): import("../../gfx/controller.js").GfxController;
    connectedCallback(): void;
    getRenderingRect(): {
        x: any;
        y: any;
        w: any;
        h: any;
        zIndex: string;
    };
    renderBlock(): unknown;
    renderGfxBlock(): unknown;
    renderPageContent(): unknown;
    scheduleUpdate(): Promise<void>;
    toZIndex(): string;
    updateZIndex(): void;
}
export declare function toGfxBlockComponent<Model extends GfxBlockElementModel, Service extends BlockService, WidgetName extends string, B extends typeof BlockComponent<Model, Service, WidgetName>>(CustomBlock: B): B & {
    new (...args: any[]): GfxBlockComponent;
};
//# sourceMappingURL=gfx-block-component.d.ts.map