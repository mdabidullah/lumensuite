import { EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH, } from '@lumensuite/affine-shared/consts';
import { DocModeProvider } from '@lumensuite/affine-shared/services';
import { getLastNoteBlock } from '@lumensuite/affine-shared/utils';
import { Bound, Vec } from '@lumensuite/global/utils';
import { getRootByEditorHost } from '../utils/query.js';
function getParentModelBySelection(doc, mode, selected) {
    const currentMode = mode;
    const root = doc.root;
    if (!root)
        return {
            index: undefined,
            model: null,
        };
    if (currentMode === 'edgeless') {
        const surface = root.children.find(child => child.flavour === 'affine:surface') ?? null;
        return { index: undefined, model: surface };
    }
    if (currentMode === 'page') {
        let selectedBlock = selected;
        let index = undefined;
        if (!selectedBlock) {
            // if no block is selected, append to the last note block
            selectedBlock = getLastNoteBlock(doc);
        }
        while (selectedBlock && selectedBlock.flavour !== 'affine:note') {
            // selectedBlock = this.doc.getParent(selectedBlock.id);
            const parent = doc.getParent(selectedBlock.id);
            index = parent?.children.indexOf(selectedBlock);
            selectedBlock = parent;
        }
        return { index, model: selectedBlock };
    }
    return {
        index: undefined,
        model: null,
    };
}
export function insertEmbedCard(std, properties) {
    const { doc, host } = std;
    const rootService = std.getService('affine:page');
    const mode = rootService.std.get(DocModeProvider).getEditorMode() ?? 'page';
    const selectedBlock = rootService.selectedBlocks[0]?.model;
    const { model, index } = getParentModelBySelection(doc, mode, selectedBlock);
    const { flavour, targetStyle, props } = properties;
    if (mode === 'page') {
        host.doc.addBlock(flavour, props, model, index);
        return;
    }
    if (mode === 'edgeless') {
        const edgelessRoot = getRootByEditorHost(host);
        if (!edgelessRoot)
            return;
        edgelessRoot.service.viewport.smoothZoom(1);
        const surface = edgelessRoot.surface;
        const center = Vec.toVec(surface.renderer.viewport.center);
        const cardId = edgelessRoot.service.addBlock(flavour, {
            ...props,
            xywh: Bound.fromCenter(center, EMBED_CARD_WIDTH[targetStyle], EMBED_CARD_HEIGHT[targetStyle]).serialize(),
            style: targetStyle,
        }, surface.model);
        edgelessRoot.service.selection.set({
            elements: [cardId],
            editing: false,
        });
        edgelessRoot.tools.setEdgelessTool({
            type: 'default',
        });
        return;
    }
}
//# sourceMappingURL=insert-embed-card.js.map