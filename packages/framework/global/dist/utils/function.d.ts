export declare function sleep(ms: number, signal?: AbortSignal): Promise<void>;
export declare function noop(_?: unknown): void;
/**
 * @example
 * ```ts
 * const log = (message: string) => console.log(`[${new Date().toISOString()}] ${message}`);
 *
 * const throttledLog = throttle(log, 1000);
 *
 * throttledLog("Hello, world!");
 * throttledLog("Hello, world!");
 * throttledLog("Hello, world!");
 * throttledLog("Hello, world!");
 * throttledLog("Hello, world!");
 * ```
 */
export declare function throttle<T extends (...args: any[]) => any>(fn: T, limit: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}): T;
export declare function throttle<Args extends unknown[], T extends (...args: Args) => void>(fn: (...args: Args) => void, limit: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}): T;
export declare const debounce: <T extends (...args: any[]) => void>(fn: T, limit: number, { leading, trailing }?: {
    leading?: boolean | undefined;
    trailing?: boolean | undefined;
}) => T;
//# sourceMappingURL=function.d.ts.map