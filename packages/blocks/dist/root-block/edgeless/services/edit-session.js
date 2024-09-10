import { getShapeName } from '@blocksuite/affine-model';
import { ColorSchema, NodePropsSchema } from '@blocksuite/affine-shared/utils';
import { DisposableGroup, Slot, } from '@blocksuite/global/utils';
import { computed, signal } from '@lit-labs/preact-signals';
import clonedeep from 'lodash.clonedeep';
import isPlainObject from 'lodash.isplainobject';
import merge from 'lodash.merge';
import { z } from 'zod';
const LastPropsSchema = NodePropsSchema;
const SESSION_PROP_KEY = 'blocksuite:prop:record';
const SessionPropsSchema = z.object({
    viewport: z.union([
        z.object({
            centerX: z.number(),
            centerY: z.number(),
            zoom: z.number(),
        }),
        z.object({
            xywh: z.string(),
            padding: z
                .tuple([z.number(), z.number(), z.number(), z.number()])
                .optional(),
        }),
    ]),
    templateCache: z.string(),
    remoteColor: z.string(),
    showBidirectional: z.boolean(),
});
const LocalPropsSchema = z.object({
    presentBlackBackground: z.boolean(),
    presentFillScreen: z.boolean(),
    presentHideToolbar: z.boolean(),
    autoHideEmbedHTMLFullScreenToolbar: z.boolean(),
});
function isLocalProp(key) {
    return key in LocalPropsSchema.shape;
}
function isSessionProp(key) {
    return key in SessionPropsSchema.shape;
}
export class EditPropsStore {
    constructor(_service) {
        this._service = _service;
        this._disposables = new DisposableGroup();
        this.innerProps$ = signal({});
        this.slots = {
            storageUpdated: new Slot(),
        };
        const initProps = LastPropsSchema.parse(Object.entries(LastPropsSchema.shape).reduce((value, [key, schema]) => {
            return {
                ...value,
                [key]: schema.parse(undefined),
            };
        }, {}));
        const props = sessionStorage.getItem(SESSION_PROP_KEY);
        if (props) {
            const result = LastPropsSchema.safeParse(JSON.parse(props));
            if (result.success) {
                merge(clonedeep(initProps), result.data);
            }
        }
        this.lastProps$ = computed(() => {
            const editorSetting$ = this._service.std.getConfig('affine:page')?.editorSetting;
            return merge(clonedeep(initProps), editorSetting$?.value, this.innerProps$.value);
        });
    }
    _getStorage(key) {
        return isSessionProp(key) ? sessionStorage : localStorage;
    }
    _getStorageKey(key) {
        const id = this._service.doc.id;
        switch (key) {
            case 'viewport':
                return 'blocksuite:' + id + ':edgelessViewport';
            case 'presentBlackBackground':
                return 'blocksuite:presentation:blackBackground';
            case 'presentFillScreen':
                return 'blocksuite:presentation:fillScreen';
            case 'presentHideToolbar':
                return 'blocksuite:presentation:hideToolbar';
            case 'templateCache':
                return 'blocksuite:' + id + ':templateTool';
            case 'remoteColor':
                return 'blocksuite:remote-color';
            case 'showBidirectional':
                return 'blocksuite:' + id + ':showBidirectional';
            case 'autoHideEmbedHTMLFullScreenToolbar':
                return 'blocksuite:embedHTML:autoHideFullScreenToolbar';
            default:
                return key;
        }
    }
    applyLastProps(key, props) {
        const lastProps = this.lastProps$.value[key];
        return merge(clonedeep(lastProps), props);
    }
    dispose() {
        this._disposables.dispose();
    }
    getStorage(key) {
        try {
            const storage = this._getStorage(key);
            const value = storage.getItem(this._getStorageKey(key));
            if (!value)
                return null;
            if (isLocalProp(key)) {
                return LocalPropsSchema.shape[key].parse(JSON.parse(value));
            }
            else if (isSessionProp(key)) {
                return SessionPropsSchema.shape[key].parse(JSON.parse(value));
            }
            else {
                return null;
            }
        }
        catch {
            return null;
        }
    }
    recordLastProps(key, props) {
        const overrideProps = extractProps(props, LastPropsSchema.shape[key]._def.innerType);
        if (Object.keys(overrideProps).length === 0)
            return;
        const innerProps = this.innerProps$.value;
        this.innerProps$.value = merge(clonedeep(innerProps), {
            [key]: overrideProps,
        });
    }
    setStorage(key, value) {
        const oldValue = this.getStorage(key);
        this._getStorage(key).setItem(this._getStorageKey(key), JSON.stringify(value));
        if (oldValue === value)
            return;
        this.slots.storageUpdated.emit({ key, value });
    }
}
export function getLastPropsKey(modelType, modelProps) {
    if (modelType === 'shape') {
        const { shapeType, radius } = modelProps;
        const shapeName = getShapeName(shapeType, radius);
        return `${modelType}:${shapeName}`;
    }
    if (isLastPropsKey(modelType)) {
        return modelType;
    }
    return null;
}
function extractProps(props, ref) {
    const result = {};
    Object.entries(props).forEach(([key, value]) => {
        if (!(key in ref.shape))
            return;
        if (isPlainObject(value)) {
            if (isColorType(key, value)) {
                const color = processColorValue(value);
                if (Object.keys(color).length === 0)
                    return;
                result[key] = color;
                return;
            }
            result[key] = extractProps(props[key], ref.shape[key]);
        }
        else {
            result[key] = value;
        }
    });
    return result;
}
function isLastPropsKey(key) {
    return Object.keys(LastPropsSchema.shape).includes(key);
}
function isColorType(key, value) {
    return (['background', 'color', 'stroke', 'fill', 'Color'].some(stuff => key.startsWith(stuff) || key.endsWith(stuff)) && ColorSchema.safeParse(value).success);
}
// Don't want the user to create a transparent element, so the alpha value is removed.
function processColorValue(value) {
    const obj = {};
    for (const [k, v] of Object.entries(value)) {
        obj[k] = v.startsWith('#') ? v.substring(0, 7) : v;
    }
    return obj;
}
//# sourceMappingURL=edit-session.js.map