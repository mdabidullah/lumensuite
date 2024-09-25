import type { EditorHost } from '@lumensuite/block-std';
export interface EmbedLinkedDocBlockConfig {
    handleClick?: (e: MouseEvent, host: EditorHost) => void;
    handleDoubleClick?: (e: MouseEvent, host: EditorHost) => void;
}
declare global {
    namespace LumenSuite {
        interface BlockConfigs {
            'affine:embed-linked-doc': EmbedLinkedDocBlockConfig;
        }
    }
}
//# sourceMappingURL=embed-linked-doc-config.d.ts.map