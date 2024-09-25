import { DarkLoadingIcon, EmbedEdgelessIcon, EmbedPageIcon, LightLoadingIcon, ReloadIcon, } from '@lumensuite/affine-components/icons';
import { ThemeObserver } from '@lumensuite/affine-shared/theme';
import { DarkSyncedDocErrorBanner, LightSyncedDocErrorBanner, } from '../embed-synced-doc-block/styles.js';
import { DarkLinkedEdgelessDeletedLargeBanner, DarkLinkedEdgelessDeletedSmallBanner, DarkLinkedEdgelessEmptyLargeBanner, DarkLinkedEdgelessEmptySmallBanner, DarkLinkedPageDeletedLargeBanner, DarkLinkedPageDeletedSmallBanner, DarkLinkedPageEmptyLargeBanner, DarkLinkedPageEmptySmallBanner, LightLinkedEdgelessDeletedLargeBanner, LightLinkedEdgelessDeletedSmallBanner, LightLinkedEdgelessEmptyLargeBanner, LightLinkedEdgelessEmptySmallBanner, LightLinkedPageDeletedLargeBanner, LightLinkedPageDeletedSmallBanner, LightLinkedPageEmptyLargeBanner, LightLinkedPageEmptySmallBanner, LinkedDocDeletedIcon, } from './styles.js';
export function getEmbedLinkedDocIcons(editorMode, style) {
    const theme = ThemeObserver.mode;
    const small = style !== 'vertical';
    if (editorMode === 'page') {
        if (theme === 'light') {
            return {
                LoadingIcon: LightLoadingIcon,
                ReloadIcon,
                LinkedDocIcon: EmbedPageIcon,
                LinkedDocDeletedIcon,
                LinkedDocEmptyBanner: small
                    ? LightLinkedPageEmptySmallBanner
                    : LightLinkedPageEmptyLargeBanner,
                LinkedDocDeletedBanner: small
                    ? LightLinkedPageDeletedSmallBanner
                    : LightLinkedPageDeletedLargeBanner,
                SyncedDocErrorBanner: LightSyncedDocErrorBanner,
            };
        }
        else {
            return {
                ReloadIcon,
                LoadingIcon: DarkLoadingIcon,
                LinkedDocIcon: EmbedPageIcon,
                LinkedDocDeletedIcon,
                LinkedDocEmptyBanner: small
                    ? DarkLinkedPageEmptySmallBanner
                    : DarkLinkedPageEmptyLargeBanner,
                LinkedDocDeletedBanner: small
                    ? DarkLinkedPageDeletedSmallBanner
                    : DarkLinkedPageDeletedLargeBanner,
                SyncedDocErrorBanner: DarkSyncedDocErrorBanner,
            };
        }
    }
    else {
        if (theme === 'light') {
            return {
                ReloadIcon,
                LoadingIcon: LightLoadingIcon,
                LinkedDocIcon: EmbedEdgelessIcon,
                LinkedDocDeletedIcon,
                LinkedDocEmptyBanner: small
                    ? LightLinkedEdgelessEmptySmallBanner
                    : LightLinkedEdgelessEmptyLargeBanner,
                LinkedDocDeletedBanner: small
                    ? LightLinkedEdgelessDeletedSmallBanner
                    : LightLinkedEdgelessDeletedLargeBanner,
                SyncedDocErrorBanner: LightSyncedDocErrorBanner,
            };
        }
        else {
            return {
                ReloadIcon,
                LoadingIcon: DarkLoadingIcon,
                LinkedDocIcon: EmbedEdgelessIcon,
                LinkedDocDeletedIcon,
                LinkedDocEmptyBanner: small
                    ? DarkLinkedEdgelessEmptySmallBanner
                    : DarkLinkedEdgelessEmptyLargeBanner,
                LinkedDocDeletedBanner: small
                    ? DarkLinkedEdgelessDeletedSmallBanner
                    : DarkLinkedEdgelessDeletedLargeBanner,
                SyncedDocErrorBanner: DarkSyncedDocErrorBanner,
            };
        }
    }
}
/*
 * Returns true if it is a link to block or element.
 */
export function isLinkToNode({ params }) {
    if (!params)
        return false;
    const { mode, blockIds, elementIds } = params;
    if (!mode)
        return false;
    if (blockIds && blockIds.length > 0)
        return true;
    if (elementIds && elementIds.length > 0)
        return true;
    return false;
}
//# sourceMappingURL=utils.js.map