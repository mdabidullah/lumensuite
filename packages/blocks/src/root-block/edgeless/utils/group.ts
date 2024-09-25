import { GroupElementModel } from '@lumensuite/affine-model';
export function getElementsWithoutGroup(elements: LumenSuite.EdgelessModel[]) {
  const set = new Set<LumenSuite.EdgelessModel>();

  elements.forEach(element => {
    // TODO(@L-Sun) Use `getAllDescendantElements` instead
    if (element instanceof GroupElementModel) {
      element.descendants().forEach(child => set.add(child));
    } else {
      set.add(element);
    }
  });
  return Array.from(set);
}
