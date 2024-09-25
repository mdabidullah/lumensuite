import { BaseSelection } from '../base.js';
export declare class SurfaceSelection extends BaseSelection {
    static group: string;
    static type: string;
    readonly editing: boolean;
    readonly elements: string[];
    readonly inoperable: boolean;
    constructor(blockId: string, elements: string[], editing: boolean, inoperable?: boolean);
    static fromJSON(json: Record<string, unknown> | {
        blockId: string[];
        elements: string[];
        editing: boolean;
        inoperable?: boolean;
    }): SurfaceSelection;
    equals(other: BaseSelection): boolean;
    isEmpty(): boolean;
    toJSON(): Record<string, unknown>;
}
declare global {
    namespace LumenSuite {
        interface Selection {
            surface: typeof SurfaceSelection;
        }
    }
}
//# sourceMappingURL=surface.d.ts.map