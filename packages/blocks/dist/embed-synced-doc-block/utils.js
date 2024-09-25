import { DarkLoadingIcon, EmbedEdgelessIcon, EmbedPageIcon, LightLoadingIcon, ReloadIcon, } from '@lumensuite/affine-components/icons';
import { ThemeObserver } from '@lumensuite/affine-shared/theme';
import { DarkSyncedDocDeletedBanner, DarkSyncedDocEmptyBanner, DarkSyncedDocErrorBanner, LightSyncedDocDeletedBanner, LightSyncedDocEmptyBanner, LightSyncedDocErrorBanner, SyncedDocDeletedIcon, SyncedDocErrorIcon, } from './styles.js';
export function getSyncedDocIcons(editorMode) {
    const theme = ThemeObserver.mode;
    if (theme === 'light') {
        return {
            LoadingIcon: LightLoadingIcon,
            SyncedDocIcon: editorMode === 'page' ? EmbedPageIcon : EmbedEdgelessIcon,
            SyncedDocErrorIcon,
            SyncedDocDeletedIcon,
            ReloadIcon,
            SyncedDocEmptyBanner: LightSyncedDocEmptyBanner,
            SyncedDocErrorBanner: LightSyncedDocErrorBanner,
            SyncedDocDeletedBanner: LightSyncedDocDeletedBanner,
        };
    }
    else {
        return {
            LoadingIcon: DarkLoadingIcon,
            SyncedDocIcon: editorMode === 'page' ? EmbedPageIcon : EmbedEdgelessIcon,
            SyncedDocErrorIcon,
            SyncedDocDeletedIcon,
            ReloadIcon,
            SyncedDocEmptyBanner: DarkSyncedDocEmptyBanner,
            SyncedDocErrorBanner: DarkSyncedDocErrorBanner,
            SyncedDocDeletedBanner: DarkSyncedDocDeletedBanner,
        };
    }
}
//# sourceMappingURL=utils.js.map