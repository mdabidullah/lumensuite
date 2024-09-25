import { toDraftModel, } from '@lumensuite/store';
export const draftSelectedModelsCommand = (ctx, next) => {
    const models = ctx.selectedModels;
    if (!models) {
        console.error('`selectedModels` is required, you need to use `getSelectedModels` command before adding this command to the pipeline.');
        return;
    }
    const draftedModelsPromise = new Promise(resolve => {
        const draftedModels = models.map(toDraftModel);
        const modelMap = new Map(draftedModels.map(model => [model.id, model]));
        const traverse = (model) => {
            const isDatabase = model.flavour === 'affine:database';
            const children = isDatabase
                ? model.children
                : model.children.filter(child => modelMap.has(child.id));
            children.forEach(child => {
                modelMap.delete(child.id);
                traverse(child);
            });
            model.children = children;
        };
        draftedModels.forEach(traverse);
        const remainingDraftedModels = Array.from(modelMap.values());
        resolve(remainingDraftedModels);
    });
    return next({ draftedModels: draftedModelsPromise });
};
//# sourceMappingURL=draft-selected-models.js.map