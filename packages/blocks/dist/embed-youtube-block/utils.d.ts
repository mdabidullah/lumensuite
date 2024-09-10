import type { EmbedYoutubeBlockUrlData, EmbedYoutubeModel } from '@blocksuite/affine-model';
import type { LinkPreviewer } from '../_common/embed-block-helper/index.js';
import type { EmbedYoutubeBlockComponent } from './embed-youtube-block.js';
export declare function queryEmbedYoutubeData(embedYoutubeModel: EmbedYoutubeModel, linkPreviewer: LinkPreviewer, signal?: AbortSignal): Promise<Partial<EmbedYoutubeBlockUrlData>>;
export declare function queryYoutubeOEmbedData(url: string, signal?: AbortSignal): Promise<Partial<EmbedYoutubeBlockUrlData>>;
export declare function refreshEmbedYoutubeUrlData(embedYoutubeElement: EmbedYoutubeBlockComponent, signal?: AbortSignal): Promise<void>;
//# sourceMappingURL=utils.d.ts.map