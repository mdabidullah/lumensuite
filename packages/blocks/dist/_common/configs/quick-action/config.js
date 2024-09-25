import { CopyIcon, DatabaseTableViewIcon20, LinkedDocIcon, } from '@lumensuite/affine-components/icons';
import { createSimplePortal } from '@lumensuite/affine-components/portal';
import { toast } from '@lumensuite/affine-components/toast';
import { matchFlavours } from '@lumensuite/affine-shared/utils';
import { assertExists } from '@lumensuite/global/utils';
import { html } from 'lit';
import { convertSelectedBlocksToLinkedDoc, getTitleFromSelectedModels, notifyDocCreated, promptDocTitle, } from '../../utils/render-linked-doc.js';
import { DATABASE_CONVERT_WHITE_LIST } from './database-convert-view.js';
export const quickActionConfig = [
    {
        id: 'copy',
        name: 'Copy',
        disabledToolTip: undefined,
        icon: CopyIcon,
        hotkey: undefined,
        showWhen: () => true,
        enabledWhen: () => true,
        action: host => {
            host.std.command
                .chain()
                .getSelectedModels()
                .with({
                onCopy: () => {
                    toast(host, 'Copied to clipboard');
                },
            })
                .draftSelectedModels()
                .copySelectedModels()
                .run();
        },
    },
    {
        id: 'convert-to-database',
        name: 'Group as Database',
        disabledToolTip: 'Contains Block types that cannot be converted to Database',
        icon: DatabaseTableViewIcon20,
        showWhen: host => {
            const [_, ctx] = host.std.command
                .chain()
                .getSelectedModels({
                types: ['block', 'text'],
            })
                .run();
            const { selectedModels } = ctx;
            if (!selectedModels || selectedModels.length === 0)
                return false;
            const firstBlock = selectedModels[0];
            assertExists(firstBlock);
            if (matchFlavours(firstBlock, ['affine:database'])) {
                return false;
            }
            return true;
        },
        enabledWhen: host => {
            const [_, ctx] = host.std.command
                .chain()
                .getSelectedModels({
                types: ['block', 'text'],
            })
                .run();
            const { selectedModels } = ctx;
            if (!selectedModels || selectedModels.length === 0)
                return false;
            return selectedModels.every(block => DATABASE_CONVERT_WHITE_LIST.includes(block.flavour));
        },
        action: host => {
            createSimplePortal({
                template: html `<database-convert-view
          .host=${host}
        ></database-convert-view>`,
            });
        },
    },
    {
        id: 'convert-to-linked-doc',
        name: 'Create Linked Doc',
        icon: LinkedDocIcon,
        hotkey: `Mod-Shift-l`,
        showWhen: host => {
            const [_, ctx] = host.std.command
                .chain()
                .getSelectedModels({
                types: ['block'],
            })
                .run();
            const { selectedModels } = ctx;
            return !!selectedModels && selectedModels.length > 0;
        },
        enabledWhen: host => {
            const [_, ctx] = host.std.command
                .chain()
                .getSelectedModels({
                types: ['block'],
            })
                .run();
            const { selectedModels } = ctx;
            return !!selectedModels && selectedModels.length > 0;
        },
        action: host => {
            const [_, ctx] = host.std.command
                .chain()
                .getSelectedModels({
                types: ['block'],
                mode: 'highest',
            })
                .run();
            const { selectedModels } = ctx;
            assertExists(selectedModels);
            if (!selectedModels.length)
                return;
            host.selection.clear();
            const doc = host.doc;
            const autofill = getTitleFromSelectedModels(selectedModels);
            void promptDocTitle(host, autofill).then(title => {
                if (title === null)
                    return;
                convertSelectedBlocksToLinkedDoc(doc, selectedModels, title);
                notifyDocCreated(host, doc);
            });
        },
    },
];
//# sourceMappingURL=config.js.map