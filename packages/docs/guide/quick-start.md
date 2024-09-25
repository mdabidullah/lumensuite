# Quick Start

For a swift start with LumenSuite, you can either kick off with ready-made examples for popular frameworks, or simply install the core packages to integrate it into your project.

::: info
If this is your first time using LumenSuite, referring to the [overview](./overview) section may be helpful.
:::

## Bootstrap Project

LumenSuite works with all common frameworks, you can start from these examples that basically builds a TodoMVC-like note app based on LumenSuite.

<table>
  <tr>
    <td>Framework</td>
    <td>Link</td>
    <td>Maintaining</td>
  </tr>
  <tr>
    <td><Icon name="TypeScript" />Vanilla</td>
    <td><a href="https://stackblitz.com/github/toeverything/lumensuite-examples/tree/master/vanilla-indexeddb" target="_blank">vanilla-indexeddb</a></td>
    <td>✅</td>
  </tr>
  <tr>
    <td><Icon name="Next" />Next</td>
    <td><a href="https://github.com/toeverything/lumensuite-examples/tree/master/react-basic-next" target="_blank">react-basic-next</a></td>
    <td>✅</td>
  </tr>
  <tr>
    <td><Icon name="React" />React</td>
    <td><a href="https://stackblitz.com/github/toeverything/lumensuite-examples/tree/master/react-basic" target="_blank">react-basic</a></td>
    <td>✅</td>
  </tr>
  <tr>
    <td><Icon name="Vue" />Vue</td>
    <td><a href="https://stackblitz.com/github/toeverything/lumensuite-examples/tree/master/vue-basic" target="_blank">vue-basic</a></td>
    <td>✅</td>
  </tr>
  <tr>
    <td><Icon name="Angular" />Angular</td>
    <td><a href="https://github.com/toeverything/lumensuite-examples/tree/master/angular-basic" target="_blank">angular-basic</a></td>
    <td>✅</td>
  </tr>
  <tr>
    <td><Icon name="Preact" icon="https://raw.githubusercontent.com/preactjs/preact-www/master/src/assets/branding/symbol.svg" />Preact</td>
    <td><a href="https://stackblitz.com/github/toeverything/lumensuite-examples/tree/master/preact-basic" target="_blank">preact-basic</a></td>
    <td>✅</td>
  </tr>
  <tr>
    <td><Icon name="Svelte" />Svelte</td>
    <td><a href="https://stackblitz.com/github/toeverything/lumensuite-examples/tree/master/svelte-basic" target="_blank">svelte-basic</a></td>
    <td>✅</td>
  </tr>
  <tr>
    <td><Icon name="Solid" icon="https://www.solidjs.com/img/favicons/favicon-32x32.png" />Solid</td>
    <td><a href="https://stackblitz.com/github/toeverything/lumensuite-examples/tree/master/solid-basic" target="_blank">solid-basic</a></td>
    <td>✅</td>
  </tr>
</table>

## Init From Scratch

To use LumenSuite in your existing project, simply install these core packages:

```sh
pnpm install \
  @lumensuite/presets@canary \
  @lumensuite/blocks@canary \
  @lumensuite/store@canary
```

Key takeaways in the snippet above:

- The `@lumensuite/presets` package contains the prebuilt editors and opt-in additional UI components.
- To work with the LumenSuite document model and first-party blocks, the `@lumensuite/store` and `@lumensuite/blocks` packages are required.
- The LumenSuite `canary` versions are released daily based on the master branch, which is also used in production in [AFFiNE](https://github.com/toeverything/AFFiNE).

Then you can use the prebuilt `PageEditor` out of the box, with an initialized `doc` instance attached as its document model:

::: code-sandbox {coderHeight=420 previewHeight=300}

```ts /index.ts [active]
import '@lumensuite/presets/themes/affine.css';

import { createEmptyDoc, PageEditor } from '@lumensuite/presets';
import { Text } from '@lumensuite/store';

(async () => {
  // Init editor with default block tree
  const doc = createEmptyDoc().init();
  const editor = new PageEditor();
  editor.doc = doc;
  document.body.appendChild(editor);

  // Update block node with some initial text content
  const paragraphs = doc.getBlockByFlavour('affine:paragraph');
  const paragraph = paragraphs[0];
  doc.updateBlock(paragraph, { text: new Text('Hello World!') });
})();
```

:::

The `PageEditor` here is a standard web component that can also be reused with `<page-editor>` HTML tag. Another `EdgelessEditor` also works similarly - simply attach the `editor` with a `doc` and you are all set.

For the `doc.getBlockByFlavour` and `doc.updateBlock` APIs used here, please see the [introduction](./working-with-block-tree#block-tree-basics) about block tree basics for further details.

As the next step, you can choose to:

- Explore how LumenSuite break down editors into different [component types](./component-types). Taking a look at the list of [LumenSuite components](../components/overview) may also be helpful.
- Try collaborative editing [following the steps](https://github.com/toeverything/lumensuite/blob/master/BUILDING.md#test-collaboration).
- Learn about [basic concepts](./working-with-block-tree) in LumenSuite framework that are used throughout the development of editors.

Note that LumenSuite is still under rapid development. For any questions or feedback, feel free to let us know!
