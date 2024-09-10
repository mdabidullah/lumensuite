import { literal } from 'lit/static-html.js';
import { BlockService, BlockViewExtension, FlavourExtension, } from '../extension/index.js';
import './test-block.js';
class TestPageService extends BlockService {
    static { this.flavour = 'test:page'; }
}
class TestNoteService extends BlockService {
    static { this.flavour = 'test:note'; }
}
class TestHeadingService extends BlockService {
    static { this.flavour = 'test:heading'; }
}
export const testSpecs = [
    FlavourExtension('test:page'),
    TestPageService,
    BlockViewExtension('test:page', literal `test-root-block`),
    FlavourExtension('test:note'),
    TestNoteService,
    BlockViewExtension('test:note', literal `test-note-block`),
    FlavourExtension('test:heading'),
    TestHeadingService,
    BlockViewExtension('test:heading', model => {
        const h = model.type$.value;
        if (h === 'h1') {
            return literal `test-h1-block`;
        }
        return literal `test-h2-block`;
    }),
];
//# sourceMappingURL=test-spec.js.map