import type { BlockModel, Doc } from '@lumensuite/store';

import { minimatch } from 'minimatch';

export function matchFlavours<Key extends (keyof LumenSuite.BlockModels)[]>(
  model: BlockModel | null,
  expected: Key
): model is LumenSuite.BlockModels[Key[number]] {
  return (
    !!model &&
    expected.some(key =>
      minimatch(model.flavour as keyof LumenSuite.BlockModels, key)
    )
  );
}

export function isInsideBlockByFlavour(
  doc: Doc,
  block: BlockModel | string,
  flavour: string
): boolean {
  const parent = doc.getParent(block);
  if (parent === null) {
    return false;
  }
  if (flavour === parent.flavour) {
    return true;
  }
  return isInsideBlockByFlavour(doc, parent, flavour);
}
