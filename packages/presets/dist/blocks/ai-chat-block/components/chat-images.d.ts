import { LitElement, nothing } from 'lit';
import './image-placeholder.js';
export declare class ChatImage extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1> | undefined;
    accessor imageUrl: string;
    accessor status: 'loading' | 'error' | 'success';
}
export declare class ChatImages extends LitElement {
    static styles: import("lit").CSSResult;
    render(): typeof nothing | import("lit").TemplateResult<1>;
    accessor attachments: string[] | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'chat-image': ChatImage;
        'chat-images': ChatImages;
    }
}
//# sourceMappingURL=chat-images.d.ts.map