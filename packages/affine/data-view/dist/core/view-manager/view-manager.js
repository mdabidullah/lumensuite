import { computed, signal, } from '@lit-labs/preact-signals';
export class ViewManagerBase {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this._currentViewId$ = signal(undefined);
        this.currentView$ = computed(() => {
            return this.viewGet(this.currentViewId$.value);
        });
        this.currentViewId$ = computed(() => {
            return this._currentViewId$.value ?? this.views$.value[0];
        });
        this.readonly$ = computed(() => {
            return this.dataSource.readonly$.value;
        });
        this.views$ = computed(() => {
            return this.dataSource.viewDataList$.value.map(data => data.id);
        });
    }
    moveTo(id, position) {
        this.dataSource.viewDataMoveTo(id, position);
    }
    setCurrentView(id) {
        this._currentViewId$.value = id;
    }
    viewAdd(type) {
        const id = this.dataSource.viewDataAdd(type);
        this.setCurrentView(id);
        return id;
    }
    viewDataGet(id) {
        return this.dataSource.viewDataGet(id);
    }
    viewDelete(id) {
        this.dataSource.viewDataDelete(id);
        this.setCurrentView(this.views$.value[0]);
    }
    viewDuplicate(id) {
        const newId = this.dataSource.viewDataDuplicate(id);
        this.setCurrentView(newId);
    }
    viewGet(id) {
        const meta = this.dataSource.viewMetaGetById(id);
        return new meta.model.dataViewManager(this, id);
    }
}
//# sourceMappingURL=view-manager.js.map