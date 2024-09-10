import type { Boxed, Y } from '@blocksuite/store';
import { type Constructor, Slot } from '@blocksuite/global/utils';
import { BlockModel } from '@blocksuite/store';
import { type BaseElementProps, GfxGroupLikeElementModel, GfxPrimitiveElementModel } from './element-model.js';
export type SurfaceBlockProps = {
    elements: Boxed<Y.Map<Y.Map<unknown>>>;
};
export interface ElementUpdatedData {
    id: string;
    props: Record<string, unknown>;
    oldValues: Record<string, unknown>;
    local: boolean;
}
export type SurfaceMiddleware = (surface: SurfaceBlockModel, hooks: SurfaceBlockModel['hooks']) => () => void;
export declare class SurfaceBlockModel extends BlockModel<SurfaceBlockProps> {
    protected _decoratorState: {
        creating: boolean;
        deriving: boolean;
        skipField: boolean;
    };
    protected _elementCtorMap: Record<string, Constructor<GfxPrimitiveElementModel, ConstructorParameters<typeof GfxPrimitiveElementModel>>>;
    protected _elementModels: Map<string, {
        mount: () => void;
        unmount: () => void;
        model: GfxPrimitiveElementModel;
    }>;
    protected _elementToGroup: Map<string, string>;
    protected _elementTypeMap: Map<string, GfxPrimitiveElementModel<BaseElementProps>[]>;
    protected _groupToElements: Map<string, string[]>;
    protected _surfaceBlockModel: boolean;
    elementAdded: Slot<{
        id: string;
        local: boolean;
    }>;
    elementRemoved: Slot<{
        id: string;
        type: string;
        model: GfxPrimitiveElementModel;
        local: boolean;
    }>;
    elementUpdated: Slot<ElementUpdatedData>;
    /**
     * Hooks is used to attach extra logic when calling `addElement`、`updateElement`(or assign property directly) and `removeElement`.
     * It's useful when dealing with relation between different model.
     */
    protected hooks: {
        update: Slot<Omit<ElementUpdatedData, "local">>;
        remove: Slot<{
            id: string;
            type: string;
            model: GfxPrimitiveElementModel;
        }>;
    };
    get elementModels(): GfxPrimitiveElementModel<BaseElementProps>[];
    get registeredElementTypes(): string[];
    constructor();
    private _createElementFromProps;
    private _createElementFromYMap;
    private _initElementModels;
    private _propsToY;
    private _watchGroupRelationChange;
    protected _extendElement(ctorMap: Record<string, Constructor<GfxPrimitiveElementModel, ConstructorParameters<typeof GfxPrimitiveElementModel>>>): void;
    protected _init(): void;
    addElement<T extends object = Record<string, unknown>>(props: Partial<T> & {
        type: string;
    }): string;
    protected applyMiddlewares(): void;
    dispose(): void;
    getElementById(id: string): GfxPrimitiveElementModel | null;
    getElementsByType(type: string): GfxPrimitiveElementModel[];
    getGroup<T extends GfxGroupLikeElementModel<BaseElementProps> = GfxGroupLikeElementModel<BaseElementProps>>(id: string): T | null;
    getGroups(id: string): GfxGroupLikeElementModel<BaseElementProps>[];
    hasElementById(id: string): boolean;
    isInMindmap(id: string): boolean;
    removeElement(id: string): void;
    updateElement<T extends object = Record<string, unknown>>(id: string, props: Partial<T>): void;
}
//# sourceMappingURL=surface-model.d.ts.map