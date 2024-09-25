import type { EmbedCardStyle } from '../../../utils/index.js';
export type EmbedGithubBlockUrlData = {
    image: string | null;
    status: string | null;
    statusReason: string | null;
    title: string | null;
    description: string | null;
    createdAt: string | null;
    assignees: string[] | null;
};
export declare const EmbedGithubStyles: EmbedCardStyle[];
export type EmbedGithubBlockProps = {
    style: (typeof EmbedGithubStyles)[number];
    owner: string;
    repo: string;
    githubType: 'issue' | 'pr';
    githubId: string;
    url: string;
    caption: string | null;
} & EmbedGithubBlockUrlData;
declare const EmbedGithubModel_base: {
    new (): import("@lumensuite/block-std/gfx").GfxBlockElementModel<{
        style: (typeof EmbedGithubStyles)[number];
        owner: string;
        repo: string;
        githubType: "issue" | "pr";
        githubId: string;
        url: string;
        caption: string | null;
    } & EmbedGithubBlockUrlData & import("../../../utils/gfx-compatible.js").GfxCompatibleProps>;
};
export declare class EmbedGithubModel extends EmbedGithubModel_base {
}
declare global {
    namespace LumenSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-github': EmbedGithubModel;
        }
        interface BlockModels {
            'affine:embed-github': EmbedGithubModel;
        }
    }
}
export {};
//# sourceMappingURL=github-model.d.ts.map