import type { ConnectorElementModel } from '@blocksuite/affine-model';
import type { SurfaceBlockProps } from '@blocksuite/block-std/gfx';
import { SurfaceBlockModel as BaseSurfaceModel } from '@blocksuite/block-std/gfx';
import { SurfaceBlockTransformer } from './surface-transformer.js';
export declare const SurfaceBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<SurfaceBlockProps>;
        flavour: "affine:surface";
    } & {
        version: number;
        role: "hub";
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: SurfaceBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => SurfaceBlockTransformer) | undefined;
};
export type SurfaceMiddleware = (surface: SurfaceBlockModel, hooks: SurfaceBlockModel['hooks']) => () => void;
export declare class SurfaceBlockModel extends BaseSurfaceModel {
    private _disposables;
    _init(): void;
    applyMiddlewares(): void;
    getConnectors(id: string): ConnectorElementModel[];
    getElementsByType<K extends keyof BlockSuite.SurfaceElementModelMap>(type: K): BlockSuite.SurfaceElementModelMap[K][];
}
//# sourceMappingURL=surface-model.d.ts.map