import { ImageBlockSchema } from '@lumensuite/affine-model';
import { ImageSelection } from '@lumensuite/affine-shared/selection';
import { TelemetryProvider } from '@lumensuite/affine-shared/services';
import { isInsideEdgelessEditor, matchFlavours, } from '@lumensuite/affine-shared/utils';
import { BlockService } from '@lumensuite/block-std';
import { Bound, Point } from '@lumensuite/global/utils';
import { render } from 'lit';
import { FileDropManager, } from '../_common/components/file-drop-manager.js';
import { setImageProxyMiddlewareURL } from '../_common/transformers/middlewares.js';
import { EdgelessRootBlockComponent } from '../root-block/edgeless/edgeless-root-block.js';
import { AFFINE_DRAG_HANDLE_WIDGET, AffineDragHandleWidget, } from '../root-block/widgets/drag-handle/drag-handle.js';
import { captureEventTarget, convertDragPreviewDocToEdgeless, convertDragPreviewEdgelessToDoc, } from '../root-block/widgets/drag-handle/utils.js';
import { ImageEdgelessBlockComponent } from './image-edgeless-block.js';
import { addSiblingImageBlock } from './utils.js';
export class ImageBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this._dragHandleOption = {
            flavour: ImageBlockSchema.model.flavour,
            edgeless: true,
            onDragStart: ({ state, startDragging, anchorBlockId, editorHost }) => {
                const element = captureEventTarget(state.raw.target);
                if (element?.classList.contains('resize'))
                    return false;
                if (!anchorBlockId)
                    return false;
                const anchorComponent = editorHost.std.view.getBlock(anchorBlockId);
                if (!anchorComponent ||
                    !matchFlavours(anchorComponent.model, [ImageBlockSchema.model.flavour]))
                    return false;
                const blockComponent = anchorComponent;
                const isDraggingByDragHandle = !!element?.closest(AFFINE_DRAG_HANDLE_WIDGET);
                const isDraggingByComponent = blockComponent.contains(element);
                const isInSurface = blockComponent instanceof ImageEdgelessBlockComponent;
                if (!isInSurface && (isDraggingByDragHandle || isDraggingByComponent)) {
                    editorHost.std.selection.setGroup('note', [
                        editorHost.std.selection.create('block', {
                            blockId: blockComponent.blockId,
                        }),
                    ]);
                    startDragging([blockComponent], state);
                    return true;
                }
                else if (isInSurface && isDraggingByDragHandle) {
                    const edgelessService = editorHost.std.getService('affine:page');
                    const scale = edgelessService.viewport.zoom || 1;
                    const width = blockComponent.getBoundingClientRect().width;
                    const bound = Bound.deserialize(blockComponent.model.xywh);
                    const zoom = edgelessService.viewport.zoom || 1;
                    const offset = new Point(bound.x * zoom, bound.y * zoom);
                    const dragPreviewEl = document.createElement('div');
                    dragPreviewEl.style.borderRadius = '4px';
                    dragPreviewEl.style.overflow = 'hidden';
                    dragPreviewEl.style.width = `${width / scale}px`;
                    render(blockComponent.host.dangerouslyRenderModel(blockComponent.model), dragPreviewEl);
                    startDragging([blockComponent], state, dragPreviewEl, offset);
                    return true;
                }
                return false;
            },
            onDragEnd: props => {
                const { state, draggingElements } = props;
                if (draggingElements.length !== 1 ||
                    !matchFlavours(draggingElements[0].model, [
                        ImageBlockSchema.model.flavour,
                    ]))
                    return false;
                const blockComponent = draggingElements[0];
                const isInSurface = blockComponent instanceof ImageEdgelessBlockComponent;
                const target = captureEventTarget(state.raw.target);
                const isTargetEdgelessContainer = target?.classList.contains('edgeless-container');
                if (isInSurface) {
                    return convertDragPreviewEdgelessToDoc({
                        blockComponent,
                        ...props,
                    });
                }
                else if (isTargetEdgelessContainer) {
                    return convertDragPreviewDocToEdgeless({
                        blockComponent,
                        cssSelector: '.drag-target',
                        ...props,
                    });
                }
                return false;
            },
        };
        this._fileDropOptions = {
            flavour: this.flavour,
            onDrop: async ({ files, targetModel, place, point }) => {
                const imageFiles = files.filter(file => file.type.startsWith('image/'));
                if (!imageFiles.length)
                    return false;
                if (targetModel && !matchFlavours(targetModel, ['affine:surface'])) {
                    addSiblingImageBlock(this.host, imageFiles, this.maxFileSize, targetModel, place);
                }
                else if (isInsideEdgelessEditor(this.host)) {
                    const edgelessRoot = this.rootComponent;
                    if (!(edgelessRoot instanceof EdgelessRootBlockComponent))
                        return false;
                    point = edgelessRoot.service.viewport.toViewCoordFromClientCoord(point);
                    await edgelessRoot.addImages(imageFiles, point);
                    this.std.getOptional(TelemetryProvider)?.track('CanvasElementAdded', {
                        control: 'canvas:drop',
                        page: 'whiteboard editor',
                        module: 'toolbar',
                        segment: 'toolbar',
                        type: 'image',
                    });
                }
                return true;
            },
        };
        this.maxFileSize = 10 * 1000 * 1000; // 10MB (default)
    }
    static { this.flavour = ImageBlockSchema.model.flavour; }
    static { this.setImageProxyURL = setImageProxyMiddlewareURL; }
    get rootComponent() {
        const rootModel = this.doc.root;
        if (!rootModel)
            return null;
        const rootComponent = this.std.view.getBlock(rootModel.id);
        return rootComponent;
    }
    mounted() {
        super.mounted();
        this.selectionManager.register(ImageSelection);
        this.fileDropManager = new FileDropManager(this, this._fileDropOptions);
        this.disposables.add(AffineDragHandleWidget.registerOption(this._dragHandleOption));
    }
}
//# sourceMappingURL=image-service.js.map