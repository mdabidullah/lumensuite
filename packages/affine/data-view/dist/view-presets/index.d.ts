export * from './kanban/index.js';
export * from './table/index.js';
export declare const viewPresets: {
    tableViewConfig: {
        type: "table";
        model: import("../index.js").DataViewConfig<import("./table/define.js").TableViewData>;
        renderer: import("../index.js").DataViewRendererConfig;
    };
    kanbanViewConfig: {
        type: "kanban";
        model: import("../index.js").DataViewConfig<import("./kanban/define.js").KanbanViewData>;
        renderer: import("../index.js").DataViewRendererConfig;
    };
};
//# sourceMappingURL=index.d.ts.map