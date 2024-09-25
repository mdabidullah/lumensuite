import { FrameIcon } from '@lumensuite/affine-components/icons';
import { FrameConfig } from './config.js';
export const buildFrameDenseMenu = edgeless => ({
    type: 'sub-menu',
    name: 'Frame',
    icon: FrameIcon,
    select: () => edgeless.tools.setEdgelessTool({ type: 'frame' }),
    isSelected: edgeless.tools.edgelessTool.type === 'frame',
    options: {
        items: [
            {
                type: 'action',
                name: 'Custom',
                select: () => edgeless.tools.setEdgelessTool({ type: 'frame' }),
            },
            ...FrameConfig.map(config => ({
                type: 'action',
                name: `Slide ${config.name}`,
                select: () => {
                    edgeless.tools.setEdgelessTool({ type: 'default' });
                    edgeless.service.frame.createFrameOnViewportCenter(config.wh);
                },
            })),
        ],
    },
});
//# sourceMappingURL=frame-dense-menu.js.map