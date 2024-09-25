import { BookmarkIcon, CaptionIcon, CopyIcon, DeleteIcon, DownloadIcon, DuplicateIcon, } from '@lumensuite/affine-components/icons';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { duplicate } from './utils.js';
export const PRIMARY_GROUPS = [
    {
        type: 'primary',
        items: [
            {
                type: 'download',
                label: 'Download',
                icon: DownloadIcon,
                generate: ({ blockComponent }) => {
                    return {
                        action: () => {
                            blockComponent.download();
                        },
                        render: item => html `
              <editor-icon-button
                class="image-toolbar-button download"
                aria-label=${ifDefined(item.label)}
                .tooltip=${item.label}
                .tooltipOffset=${4}
                @click=${(e) => {
                            e.stopPropagation();
                            item.action();
                        }}
              >
                ${item.icon}
              </editor-icon-button>
            `,
                    };
                },
            },
            {
                type: 'caption',
                label: 'Caption',
                icon: CaptionIcon,
                when: ({ doc }) => !doc.readonly,
                generate: ({ blockComponent }) => {
                    return {
                        action: () => {
                            blockComponent.captionEditor?.show();
                        },
                        render: item => html `
              <editor-icon-button
                class="image-toolbar-button caption"
                aria-label=${ifDefined(item.label)}
                .tooltip=${item.label}
                .tooltipOffset=${4}
                @click=${(e) => {
                            e.stopPropagation();
                            item.action();
                        }}
              >
                ${item.icon}
              </editor-icon-button>
            `,
                    };
                },
            },
        ],
    },
];
// Clipboard Group
export const clipboardGroup = {
    type: 'clipboard',
    items: [
        {
            type: 'copy',
            label: 'Copy',
            icon: CopyIcon,
            action: ({ blockComponent, close }) => {
                blockComponent.copy();
                close();
            },
        },
        {
            type: 'duplicate',
            label: 'Duplicate',
            icon: DuplicateIcon,
            when: ({ doc }) => !doc.readonly,
            action: ({ blockComponent, abortController }) => {
                duplicate(blockComponent, abortController);
            },
        },
    ],
};
// Conversions Group
export const conversionsGroup = {
    type: 'conversions',
    items: [
        {
            label: 'Turn into card view',
            type: 'turn-into-card-view',
            icon: BookmarkIcon,
            when: ({ doc, blockComponent }) => {
                const supportAttachment = doc.schema.flavourSchemaMap.has('affine:attachment');
                const readonly = doc.readonly;
                return supportAttachment && !readonly && !!blockComponent.blob;
            },
            action: ({ blockComponent, close }) => {
                blockComponent.convertToCardView();
                close();
            },
        },
    ],
};
// Delete Group
export const deleteGroup = {
    type: 'delete',
    items: [
        {
            type: 'delete',
            label: 'Delete',
            icon: DeleteIcon,
            when: ({ doc }) => !doc.readonly,
            action: ({ doc, blockComponent, close }) => {
                doc.deleteBlock(blockComponent.model);
                close();
            },
        },
    ],
};
export const MORE_GROUPS = [
    clipboardGroup,
    conversionsGroup,
    deleteGroup,
];
//# sourceMappingURL=config.js.map