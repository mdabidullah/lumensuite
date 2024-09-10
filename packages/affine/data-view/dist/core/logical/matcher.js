import { typesystem } from './typesystem.js';
export class Matcher {
    constructor(_match = typesystem.isSubtype.bind(typesystem)) {
        this._match = _match;
        this.list = [];
    }
    all() {
        return this.list;
    }
    allMatched(type) {
        const result = [];
        for (const t of this.list) {
            if (this._match(t.type, type)) {
                result.push(t);
            }
        }
        return result;
    }
    allMatchedData(type) {
        const result = [];
        for (const t of this.list) {
            if (this._match(t.type, type)) {
                result.push(t.data);
            }
        }
        return result;
    }
    find(f) {
        return this.list.find(f);
    }
    findData(f) {
        return this.list.find(data => f(data.data))?.data;
    }
    isMatched(type, target) {
        return this._match(type, target);
    }
    match(type) {
        for (const t of this.list) {
            if (this._match(t.type, type)) {
                return t.data;
            }
        }
        return;
    }
    register(type, data) {
        this.list.push({ type, data });
    }
}
//# sourceMappingURL=matcher.js.map