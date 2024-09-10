var _a;
import { BlockSuiteError, ErrorCode } from '@blocksuite/global/exceptions';
import { nothing } from 'lit';
import { GfxControllerIdentifier } from '../../gfx/index.js';
import { BlockComponent } from './block-component.js';
export function isGfxBlockComponent(element) {
    return element?.[GfxElementSymbol] === true;
}
export const GfxElementSymbol = Symbol('GfxElement');
export class GfxBlockComponent extends BlockComponent {
    constructor() {
        super(...arguments);
        this[_a] = true;
    }
    static { _a = GfxElementSymbol; }
    get gfx() {
        return this.std.get(GfxControllerIdentifier);
    }
    connectedCallback() {
        super.connectedCallback();
        this.style.position = 'absolute';
    }
    getRenderingRect() {
        const { xywh$ } = this.model;
        if (!xywh$) {
            throw new BlockSuiteError(ErrorCode.GfxBlockElementError, `Error on rendering '${this.model.flavour}': Gfx block's model should have 'xywh' property.`);
        }
        const [x, y, w, h] = JSON.parse(xywh$.value);
        return { x, y, w, h, zIndex: this.toZIndex() };
    }
    renderBlock() {
        const { x, y, w, h, zIndex } = this.getRenderingRect();
        this.style.left = `${x}px`;
        this.style.top = `${y}px`;
        this.style.width = `${w}px`;
        this.style.height = `${h}px`;
        this.style.zIndex = zIndex;
        return this.renderGfxBlock();
    }
    renderGfxBlock() {
        return nothing;
    }
    renderPageContent() {
        return nothing;
    }
    async scheduleUpdate() {
        const parent = this.parentElement;
        if (this.hasUpdated || !parent || !('scheduleUpdateChildren' in parent)) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            super.scheduleUpdate();
        }
        else {
            await parent.scheduleUpdateChildren(this.model.id);
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            super.scheduleUpdate();
        }
    }
    toZIndex() {
        return this.gfx.layer.getZIndex(this.model).toString() ?? '0';
    }
    updateZIndex() {
        this.style.zIndex = this.toZIndex();
    }
}
export function toGfxBlockComponent(CustomBlock) {
    var _b;
    // @ts-ignore
    return class extends CustomBlock {
        constructor() {
            super(...arguments);
            this[_b] = true;
        }
        static { _b = GfxElementSymbol; }
        get gfx() {
            return this.std.get(GfxControllerIdentifier);
        }
        connectedCallback() {
            super.connectedCallback();
            this.style.position = 'absolute';
        }
        getRenderingRect() {
            const { xywh$ } = this.model;
            if (!xywh$) {
                throw new BlockSuiteError(ErrorCode.GfxBlockElementError, `Error on rendering '${this.model.flavour}': Gfx block's model should have 'xywh' property.`);
            }
            const [x, y, w, h] = JSON.parse(xywh$.value);
            return { x, y, w, h, zIndex: this.toZIndex() };
        }
        renderBlock() {
            const { x, y, w, h, zIndex } = this.getRenderingRect();
            this.style.left = `${x}px`;
            this.style.top = `${y}px`;
            this.style.width = typeof w === 'number' ? `${w}px` : w;
            this.style.height = typeof h === 'number' ? `${h}px` : h;
            this.style.zIndex = zIndex;
            return this.renderGfxBlock();
        }
        renderGfxBlock() {
            return this.renderPageContent();
        }
        renderPageContent() {
            return super.renderBlock();
        }
        async scheduleUpdate() {
            const parent = this.parentElement;
            if (this.hasUpdated || !parent || !('scheduleUpdateChildren' in parent)) {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                super.scheduleUpdate();
            }
            else {
                await parent.scheduleUpdateChildren(this.model.id);
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                super.scheduleUpdate();
            }
        }
        toZIndex() {
            return this.gfx.layer.getZIndex(this.model).toString() ?? '0';
        }
        updateZIndex() {
            this.style.zIndex = this.toZIndex();
        }
    };
}
//# sourceMappingURL=gfx-block-component.js.map