import type { PeekViewService } from '@blocksuite/affine-components/peek';
import type { RefNodeSlots } from '@blocksuite/affine-components/rich-text';
import type { BlockComponent } from '@blocksuite/block-std';
import { ThemeObserver } from '@blocksuite/affine-shared/theme';
import { BlockService } from '@blocksuite/block-std';
import type { NotificationService } from '../_common/components/index.js';
import { FileDropManager } from '../_common/components/file-drop-manager.js';
import { ExportManager } from '../_common/export-manager/export-manager.js';
import { EditPropsStore } from './edgeless/services/edit-session.js';
export declare abstract class RootService extends BlockService {
    static readonly flavour: "affine:page";
    private _exportOptions;
    private _fileDropOptions;
    readonly editPropsStore: EditPropsStore;
    readonly exportManager: ExportManager;
    readonly fileDropManager: FileDropManager;
    notificationService: NotificationService | null;
    peekViewService: PeekViewService | null;
    abstract slots: RefNodeSlots;
    readonly themeObserver: ThemeObserver;
    transformers: {
        markdown: {
            exportDoc: (doc: import("@blocksuite/store").Doc) => Promise<void>;
            importMarkdown: ({ doc, markdown, noteId, }: {
                doc: import("@blocksuite/store").Doc;
                markdown: string;
                noteId: string;
            }) => Promise<void>;
        };
        html: {
            exportDoc: (doc: import("@blocksuite/store").Doc) => Promise<void>;
        };
        zip: {
            exportDocs: (collection: import("@blocksuite/store").DocCollection, docs: import("@blocksuite/store").Doc[]) => Promise<Blob>;
            importDocs: (collection: import("@blocksuite/store").DocCollection, imported: Blob) => Promise<(import("@blocksuite/store").Doc | undefined)[]>;
        };
    };
    get selectedBlocks(): BlockComponent<import("@blocksuite/store").BlockModel<object, object & {}>, BlockService, string>[];
    get selectedModels(): import("@blocksuite/store").BlockModel<object, object & {}>[];
    get viewportElement(): HTMLElement | null;
    mounted(): void;
    unmounted(): void;
}
declare global {
    namespace BlockSuite {
        interface BlockServices {
            'affine:page': RootService;
        }
    }
}
//# sourceMappingURL=root-service.d.ts.map