import type { SerializedXYWH } from '@blocksuite/global/utils';
type AIChatProps = {
    xywh: SerializedXYWH;
    index: string;
    scale: number;
    messages: string;
    sessionId: string;
    rootWorkspaceId: string;
    rootDocId: string;
};
export declare const AIChatBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<AIChatProps>;
        flavour: "affine:embed-ai-chat";
    } & {
        version: number;
        role: "content";
        children: never[];
    };
    onUpgrade?: ((data: AIChatProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<AIChatProps>) | undefined;
};
declare const AIChatBlockModel_base: {
    new (): import("@blocksuite/block-std/gfx").GfxBlockElementModel<AIChatProps>;
};
export declare class AIChatBlockModel extends AIChatBlockModel_base {
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-ai-chat': AIChatBlockModel;
        }
        interface BlockModels {
            'affine:embed-ai-chat': AIChatBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=ai-chat-model.d.ts.map