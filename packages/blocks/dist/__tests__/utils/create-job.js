import { DocCollection, Job, Schema, } from '@lumensuite/store';
import { AffineSchemas } from '../../schemas.js';
export function createJob(middlewares) {
    const schema = new Schema().register(AffineSchemas);
    const docCollection = new DocCollection({ schema });
    docCollection.meta.initialize();
    return new Job({ collection: docCollection, middlewares });
}
//# sourceMappingURL=create-job.js.map