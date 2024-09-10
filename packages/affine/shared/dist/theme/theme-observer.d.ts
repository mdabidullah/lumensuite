import { type Color, ColorScheme } from '@blocksuite/affine-model';
/**
 * Observer theme changing by `data-theme` property
 */
export declare class ThemeObserver {
    #private;
    mode$: import("@preact/signals-core").Signal<ColorScheme>;
    static get computedStyle(): CSSStyleDeclaration;
    static get instance(): ThemeObserver;
    static get mode(): ColorScheme;
    /**
     * Generates a CSS's color property with `var` or `light-dark` functions.
     *
     * Sometimes used to set the frame/note background.
     *
     * @param color - A color value.
     * @param fallback  - If color value processing fails, it will be used as a fallback.
     * @returns - A color property string.
     *
     * @example
     *
     * ```
     * `rgba(255,0,0)`
     * `#fff`
     * `light-dark(#fff, #000)`
     * `var(--affine-palette-shape-blue)`
     * ```
     */
    static generateColorProperty(color: Color, fallback?: string): string;
    /**
     * Gets a color with the current theme.
     *
     * @param color - A color value.
     * @param fallback - If color value processing fails, it will be used as a fallback.
     * @param real - If true, it returns the computed style.
     * @returns - A color property string.
     *
     * @example
     *
     * ```
     * `rgba(255,0,0)`
     * `#fff`
     * `--affine-palette-shape-blue`
     * ```
     */
    static getColorValue(color: Color, fallback?: string, real?: boolean): string;
    static getPropertyValue(property: string): string;
    static subscribe(callback: (T: ColorScheme) => void): () => void;
    disconnect(): void;
    observe(element: HTMLElement): void;
}
//# sourceMappingURL=theme-observer.d.ts.map