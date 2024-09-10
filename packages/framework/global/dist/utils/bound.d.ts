import { Bound, type IBound, type IVec } from './model/index.js';
export declare function getCommonBound(bounds: IBound[]): Bound | null;
export declare function getElementsBound(bounds: IBound[]): Bound;
export declare function getBoundFromPoints(points: IVec[]): Bound;
export declare function inflateBound(bound: IBound, delta: number): Bound;
export declare function transformPointsToNewBound<T extends {
    x: number;
    y: number;
}>(points: T[], oldBound: IBound, oldMargin: number, newBound: IBound, newMargin: number): {
    points: T[];
    bound: Bound;
};
//# sourceMappingURL=bound.d.ts.map