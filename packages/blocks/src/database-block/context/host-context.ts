import type { EditorHost } from '@lumensuite/block-std';

import { createContextKey } from '@lumensuite/data-view';

export const HostContextKey = createContextKey<EditorHost>('editor-host');
