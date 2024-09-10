/**
 *
 * @example
 * ```ts
 * const items = [
 *  {name: 'a', classroom: 'c1'},
 *  {name: 'b', classroom: 'c2'},
 *  {name: 'a', classroom: 't0'}
 * ]
 * const counted = countBy(items1, i => i.name);
 * // counted: { a: 2, b: 1}
 * ```
 */
export declare function countBy<T>(items: T[], key: (item: T) => string | number | null): Record<string, number>;
/**
 * @example
 * ```ts
 * const items = [{n: 1}, {n: 2}]
 * const max = maxBy(items, i => i.n);
 * // max: {n: 2}
 * ```
 */
export declare function maxBy<T>(items: T[], value: (item: T) => number): T | null;
/**
 * Checks if there are at least `n` elements in the array that match the given condition.
 *
 * @param arr - The input array of elements.
 * @param matchFn - A function that takes an element of the array and returns a boolean value
 *                  indicating if the element matches the desired condition.
 * @param n - The minimum number of matching elements required.
 * @returns A boolean value indicating if there are at least `n` matching elements in the array.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const isEven = (num: number): boolean => num % 2 === 0;
 * console.log(atLeastNMatches(arr, isEven, 2)); // Output: true
 */
export declare function atLeastNMatches<T>(arr: T[], matchFn: (element: T) => boolean, n: number): boolean;
/**
 * Groups an array of elements based on a provided key function.
 *
 * @example
 * interface Student {
 *   name: string;
 *   age: number;
 * }
 * const students: Student[] = [
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 23 },
 *   { name: 'Cathy', age: 25 },
 * ];
 * const groupedByAge = groupBy(students, (student) => student.age.toString());
 * console.log(groupedByAge);
 * // Output: {
 *  '23': [ { name: 'Bob', age: 23 } ],
 *  '25': [ { name: 'Alice', age: 25 }, { name: 'Cathy', age: 25 } ]
 * }
 */
export declare function groupBy<T, K extends string>(arr: T[], key: K | ((item: T) => K)): Record<K, T[]>;
export declare function pickArray<T>(target: Array<T>, keys: number[]): Array<T>;
export declare function pick<T, K extends keyof T>(target: T, keys: K[]): {
    [key in K]: T[K];
};
export declare function pickValues<T, K extends keyof T>(target: T, keys: K[]): Array<T[K]>;
export declare function lastN<T>(target: Array<T>, n: number): T[];
export declare function isEmpty(obj: unknown): boolean;
export declare function keys<T>(obj: T): (keyof T)[];
export declare function values<T>(obj: T): T[keyof T][];
type IterableType<T> = T extends Array<infer U> ? U : T;
export declare function last<T extends Iterable<unknown>>(iterable: T): IterableType<T> | undefined;
export declare function nToLast<T extends Iterable<unknown>>(iterable: T, n: number): IterableType<T> | undefined;
export {};
//# sourceMappingURL=iterable.d.ts.map