import type { PeekViewService } from '@lumensuite/affine-components/peek';
import type { RefNodeSlots } from '@lumensuite/affine-components/rich-text';
import type { BlockComponent } from '@lumensuite/block-std';
import { ThemeObserver } from '@lumensuite/affine-shared/theme';
import { BlockService } from '@lumensuite/block-std';
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
            exportDoc: (doc: import("@lumensuite/store").Doc) => Promise<void>;
            importMarkdown: ({ doc, markdown, noteId, }: {
                doc: import("@lumensuite/store").Doc;
                markdown: string;
                noteId: string;
            }) => Promise<void>;
        };
        html: {
            exportDoc: (doc: import("@lumensuite/store").Doc) => Promise<void>;
        };
        zip: {
            exportDocs: (collection: import("@lumensuite/store").DocCollection, docs: import("@lumensuite/store").Doc[]) => Promise<Blob>;
            importDocs: (collection: import("@lumensuite/store").DocCollection, imported: Blob) => Promise<(import("@lumensuite/store").Doc | undefined)[]>;
        };
    };
    get selectedBlocks(): BlockComponent<import("@lumensuite/store").BlockModel<object, object & {}>, BlockService, string>[];
    get selectedModels(): import("@lumensuite/store").BlockModel<object, object & {}>[];
    get viewportElement(): HTMLElement | null;
    mounted(): void;
    unmounted(): void;
}
declare global {
    namespace LumenSuite {
        interface BlockServices {
            'affine:page': RootService;
        }
    }
}
//# sourceMappingURL=root-service.d.ts.map