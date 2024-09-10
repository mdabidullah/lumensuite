import type { LitElement, PropertyValues, TemplateResult } from 'lit';
import type { Ref } from 'lit/directives/ref.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type StyleInfo } from 'lit/directives/style-map.js';
export type UniComponentReturn<Props = NonNullable<unknown>, Expose extends NonNullable<unknown> = NonNullable<unknown>> = {
    update: (props: Props) => void;
    unmount: () => void;
    expose: Expose;
};
export type UniComponent<Props = NonNullable<unknown>, Expose extends NonNullable<unknown> = NonNullable<unknown>> = (ele: HTMLElement, props: Props) => UniComponentReturn<Props, Expose>;
export declare const renderUniLit: <Props, Expose extends NonNullable<unknown>>(uni: UniComponent<Props, Expose> | undefined, props?: Props, options?: {
    ref?: Ref<Expose>;
    style?: Readonly<StyleInfo>;
    class?: string;
}) => TemplateResult;
export declare class UniLit<Props, Expose extends NonNullable<unknown> = NonNullable<unknown>> extends ShadowlessElement {
    static styles: import("lit").CSSResult;
    uniReturn?: UniComponentReturn<Props, Expose>;
    get expose(): Expose | undefined;
    private mount;
    private unmount;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): unknown;
    protected updated(_changedProperties: PropertyValues): void;
    accessor props: Props;
    accessor ref: Ref<Expose> | undefined;
    accessor uni: UniComponent<Props, Expose> | undefined;
}
export declare const createUniComponentFromWebComponent: <T, Expose extends NonNullable<unknown> = {}>(component: typeof LitElement) => UniComponent<T, Expose>;
export declare const defineUniComponent: <T, Expose extends NonNullable<unknown>>(renderTemplate: (props: T, expose: Expose) => TemplateResult) => UniComponent<T, Expose>;
//# sourceMappingURL=uni-component.d.ts.map