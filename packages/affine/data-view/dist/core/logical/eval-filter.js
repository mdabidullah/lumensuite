import { filterMatcher } from '../../widget-presets/filter/matcher/matcher.js';
import { propertyMatcher } from './property-matcher.js';
const evalRef = (ref, row) => {
    if (ref.type === 'ref') {
        return row[ref.name];
    }
    const value = evalRef(ref.ref, row);
    const fn = propertyMatcher.findData(v => v.name === ref.propertyFuncName);
    try {
        return fn?.impl(value);
    }
    catch (e) {
        console.error(e);
        return;
    }
};
const evalValue = (value, _row) => {
    return value.value;
    // TODO
    // switch (value.type) {
    //     case "ref":
    //         return evalRef(value, row)
    //     case "literal":
    //         return value.value;
    // }
};
export const evalFilter = (filterGroup, row) => {
    const evalF = (filter) => {
        if (filter.type === 'filter') {
            const value = evalRef(filter.left, row);
            const func = filterMatcher.findData(v => v.name === filter.function);
            const args = filter.args.map(value => evalValue(value, row));
            try {
                if ((func?.impl.length ?? 0) > args.length + 1) {
                    // skip
                    return true;
                }
                const impl = func?.impl(value, ...args);
                return impl ?? true;
            }
            catch (e) {
                console.error(e);
                return true;
            }
        }
        else if (filter.type === 'group') {
            if (filter.op === 'and') {
                return filter.conditions.every(f => evalF(f));
            }
            else if (filter.op === 'or') {
                return filter.conditions.some(f => evalF(f));
            }
        }
        return true;
    };
    // console.log(evalF(filterGroup))
    return evalF(filterGroup);
};
//# sourceMappingURL=eval-filter.js.map