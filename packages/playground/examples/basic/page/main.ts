import { createEmptyDoc, PageEditor } from '@lumensuite/presets';
import '@lumensuite/presets/themes/affine.css';
import { Text } from '@lumensuite/store';

const doc = createEmptyDoc().init();
const editor = new PageEditor();
editor.doc = doc;
document.body.append(editor);

const paragraphs = doc.getBlockByFlavour('affine:paragraph');
const paragraph = paragraphs[0];
doc.updateBlock(paragraph, { text: new Text('Hello World!') });
