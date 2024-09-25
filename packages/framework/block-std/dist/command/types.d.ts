import type { cmdSymbol } from './consts.js';
export type IfAllKeysOptional<T, Yes, No> = Partial<T> extends T ? (T extends Partial<T> ? Yes : No) : No;
type MakeOptionalIfEmpty<T> = IfAllKeysOptional<T, void | T, T>;
export interface InitCommandCtx {
    std: LumenSuite.Std;
}
export type CommandKeyToData<K extends LumenSuite.CommandDataName> = Pick<LumenSuite.CommandContext, K>;
export type Command<In extends LumenSuite.CommandDataName = never, Out extends LumenSuite.CommandDataName = never, InData extends object = {}> = (ctx: CommandKeyToData<In> & InitCommandCtx & InData, next: (ctx?: CommandKeyToData<Out>) => void) => void;
type Omit1<A, B> = [keyof Omit<A, keyof B>] extends [never] ? void : Omit<A, keyof B>;
export type InDataOfCommand<C> = C extends Command<infer K, any, infer R> ? CommandKeyToData<K> & R : never;
type OutDataOfCommand<C> = C extends Command<any, infer K, any> ? CommandKeyToData<K> : never;
type CommonMethods<In extends object = {}> = {
    inline: <InlineOut extends LumenSuite.CommandDataName = never>(command: Command<Extract<keyof In, LumenSuite.CommandDataName>, InlineOut>) => Chain<In & CommandKeyToData<InlineOut>>;
    try: <InlineOut extends LumenSuite.CommandDataName = never>(fn: (chain: Chain<In>) => Chain<In & CommandKeyToData<InlineOut>>[]) => Chain<In & CommandKeyToData<InlineOut>>;
    tryAll: <InlineOut extends LumenSuite.CommandDataName = never>(fn: (chain: Chain<In>) => Chain<In & CommandKeyToData<InlineOut>>[]) => Chain<In & CommandKeyToData<InlineOut>>;
    run(): [
        result: boolean,
        ctx: CommandKeyToData<Extract<keyof In, LumenSuite.CommandDataName>>
    ];
    with<T extends Partial<LumenSuite.CommandContext>>(value: T): Chain<In & T>;
};
type Cmds = {
    [cmdSymbol]: Command[];
};
export type Chain<In extends object = {}> = CommonMethods<In> & {
    [K in keyof LumenSuite.Commands]: (data: MakeOptionalIfEmpty<Omit1<InDataOfCommand<LumenSuite.Commands[K]>, In>>) => Chain<In & OutDataOfCommand<LumenSuite.Commands[K]>>;
} & Cmds;
export type ExecCommandResult<K extends keyof LumenSuite.Commands> = OutDataOfCommand<LumenSuite.Commands[K]>;
declare global {
    namespace LumenSuite {
        interface CommandContext extends InitCommandCtx {
        }
        interface Commands {
        }
        type CommandName = keyof Commands;
        type CommandDataName = keyof CommandContext;
        type CommandChain<In extends object = {}> = Chain<In & InitCommandCtx>;
    }
}
export {};
//# sourceMappingURL=types.d.ts.map