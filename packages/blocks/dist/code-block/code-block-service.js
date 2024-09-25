import { textKeymap } from '@lumensuite/affine-components/rich-text';
import { CodeBlockSchema, ColorScheme } from '@lumensuite/affine-model';
import { ThemeObserver } from '@lumensuite/affine-shared/theme';
import { BlockService } from '@lumensuite/block-std';
import { signal } from '@lit-labs/preact-signals';
import { createHighlighterCore, } from 'shiki';
import { bundledLanguagesInfo } from 'shiki';
import getWasm from 'shiki/wasm';
import { CODE_BLOCK_DEFAULT_DARK_THEME, CODE_BLOCK_DEFAULT_LIGHT_THEME, } from './highlight/const.js';
export class CodeBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.highlighter$ = signal(null);
    }
    static { this.flavour = CodeBlockSchema.model.flavour; }
    get langs() {
        return this.std.getConfig('affine:code')?.langs ?? bundledLanguagesInfo;
    }
    get themeKey() {
        return ThemeObserver.instance.mode$.value === ColorScheme.Dark
            ? this._darkThemeKey
            : this._lightThemeKey;
    }
    mounted() {
        super.mounted();
        this.bindHotKey(textKeymap(this.std));
        createHighlighterCore({
            loadWasm: getWasm,
        })
            .then(async (highlighter) => {
            const config = this.std.getConfig('affine:code');
            const darkTheme = config?.theme?.dark ?? CODE_BLOCK_DEFAULT_DARK_THEME;
            const lightTheme = config?.theme?.light ?? CODE_BLOCK_DEFAULT_LIGHT_THEME;
            this._darkThemeKey = (await normalizeGetter(darkTheme)).name;
            this._lightThemeKey = (await normalizeGetter(lightTheme)).name;
            await highlighter.loadTheme(darkTheme, lightTheme);
            this.highlighter$.value = highlighter;
            this.disposables.add(() => {
                highlighter.dispose();
            });
        })
            .catch(console.error);
    }
}
/**
 * https://github.com/shikijs/shiki/blob/933415cdc154fe74ccfb6bbb3eb6a7b7bf183e60/packages/core/src/internal.ts#L31
 */
export async function normalizeGetter(p) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Promise.resolve(typeof p === 'function' ? p() : p).then(r => r.default || r);
}
//# sourceMappingURL=code-block-service.js.map