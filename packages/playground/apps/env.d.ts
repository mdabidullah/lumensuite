import type { EditorHost } from '@lumensuite/block-std';
import type { TestUtils } from '@lumensuite/blocks';
import type { AffineEditorContainer } from '@lumensuite/presets';
import type { BlockSchema, Doc, DocCollection, Job } from '@lumensuite/store';
import type { z } from 'zod';

declare global {
  type HTMLTemplate = [
    string,
    Record<string, unknown>,
    ...(HTMLTemplate | string)[],
  ];

  interface Window {
    editor: AffineEditorContainer;
    doc: Doc;
    collection: DocCollection;
    blockSchemas: z.infer<typeof BlockSchema>[];
    job: Job;
    Y: typeof DocCollection.Y;
    std: typeof std;
    testUtils: TestUtils;
    host: EditorHost;
    testWorker: Worker;

    wsProvider: ReturnType<typeof setupBroadcastProvider>;
    bcProvider: ReturnType<typeof setupBroadcastProvider>;

    devtoolsFormatters: {
      header: (obj: unknown, config: unknown) => null | HTMLTemplate;
      hasBody: (obj: unknown, config: unknown) => boolean | null;
      body: (obj: unknown, config: unknown) => null | HTMLTemplate;
    }[];
  }
}
