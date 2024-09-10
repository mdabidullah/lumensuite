import { BlockViewExtension, FlavourExtension, } from '@blocksuite/block-std';
import { literal } from 'lit/static-html.js';
import { DatabaseBlockService } from './database-service.js';
export const DatabaseBlockSpec = [
    FlavourExtension('affine:database'),
    DatabaseBlockService,
    BlockViewExtension('affine:database', literal `affine-database`),
];
//# sourceMappingURL=database-spec.js.map