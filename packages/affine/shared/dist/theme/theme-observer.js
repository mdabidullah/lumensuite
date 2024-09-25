import { ColorScheme } from '@lumensuite/affine-model';
import { signal } from '@lit-labs/preact-signals';
const TRANSPARENT = 'transparent';
/**
 * Observer theme changing by `data-theme` property
 */
export class ThemeObserver {
    constructor() {
        this.mode$ = signal(ColorScheme.Light);
    }
    static #computedStyle;
    static #instance;
    #observer;
    // A live `CSSStyleDeclaration` object, which updates automatically when the element's styles are changed.
    static get computedStyle() {
        let computedStyle = ThemeObserver.#computedStyle;
        if (!computedStyle) {
            computedStyle = window.getComputedStyle(document.documentElement);
            ThemeObserver.#computedStyle = computedStyle;
        }
        return computedStyle;
    }
    static get instance() {
        if (!ThemeObserver.#instance) {
            const instance = new ThemeObserver();
            instance.observe(document.documentElement);
            ThemeObserver.#instance = instance;
        }
        return ThemeObserver.#instance;
    }
    static get mode() {
        return ThemeObserver.instance.mode$.peek();
    }
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
    static generateColorProperty(color, fallback = 'transparent') {
        fallback = fallback.startsWith('--')
            ? fallback.endsWith(TRANSPARENT)
                ? TRANSPARENT
                : `var(${fallback})`
            : fallback;
        if (typeof color === 'string') {
            return ((color.startsWith('--')
                ? color.endsWith(TRANSPARENT)
                    ? TRANSPARENT
                    : `var(${color})`
                : color) ?? fallback);
        }
        if (!color) {
            return fallback;
        }
        if (color.light && color.dark) {
            return this.mode === ColorScheme.Dark
                ? `var(${color.dark})`
                : `var(${color.light})`;
        }
        return color.normal ?? fallback;
    }
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
    static getColorValue(color, fallback = TRANSPARENT, real) {
        if (typeof color === 'object') {
            color = color[ThemeObserver.mode] ?? color.normal ?? fallback;
        }
        if (!color) {
            color = fallback ?? TRANSPARENT;
        }
        if (real && color.startsWith('--')) {
            color = color.endsWith(TRANSPARENT)
                ? TRANSPARENT
                : ThemeObserver.getPropertyValue(color);
            if (!color) {
                color = fallback.startsWith('--')
                    ? ThemeObserver.getPropertyValue(fallback)
                    : fallback;
            }
        }
        return color;
    }
    static getPropertyValue(property) {
        if (property.startsWith('--')) {
            if (property.endsWith(TRANSPARENT)) {
                return TRANSPARENT;
            }
            return (ThemeObserver.computedStyle.getPropertyValue(property).trim() ||
                property);
        }
        return property;
    }
    static subscribe(callback) {
        return ThemeObserver.instance.mode$.subscribe(callback);
    }
    disconnect() {
        this.#observer?.disconnect();
    }
    observe(element) {
        const callback = () => {
            const mode = element.dataset.theme;
            if (mode && this.mode$.peek() !== mode) {
                this.mode$.value = mode;
            }
        };
        this.#observer?.disconnect();
        this.#observer = new MutationObserver(callback);
        this.#observer.observe(element, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });
        callback();
    }
}
//# sourceMappingURL=theme-observer.js.map