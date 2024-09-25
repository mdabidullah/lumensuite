import type { BlockCommands } from '@lumensuite/block-std';

import { reassociateConnectorsCommand } from './reassociate-connectors.js';

export const commands: BlockCommands = {
  reassociateConnectors: reassociateConnectorsCommand,
};
