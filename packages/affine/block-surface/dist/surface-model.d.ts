import type { ConnectorElementModel } from '@lumensuite/affine-model';
import type { SurfaceBlockProps } from '@lumensuite/block-std/gfx';
import { SurfaceBlockModel as BaseSurfaceModel } from '@lumensuite/block-std/gfx';
import { SurfaceBlockTransformer } from './surface-transformer.js';
export declare const SurfaceBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<SurfaceBlockProps>;
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
    getElementsByType<K extends keyof LumenSuite.SurfaceElementModelMap>(type: K): LumenSuite.SurfaceElementModelMap[K][];
}
//# sourceMappingURL=surface-model.d.ts.map