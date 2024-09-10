import type { Command } from '@blocksuite/block-std';
/**
 * Re-associate bindings for block that have been converted.
 *
 * @param oldId - the old block id
 * @param newId - the new block id
 */
export declare const reassociateConnectorsCommand: Command<never, never, {
    oldId: string;
    newId: string;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            reassociateConnectors: typeof reassociateConnectorsCommand;
        }
    }
}
//# sourceMappingURL=reassociate-connectors.d.ts.map