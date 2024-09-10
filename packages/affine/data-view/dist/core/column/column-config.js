export const columnType = (type) => ({
    type: type,
    modelConfig: (ops) => {
        const create = (name, data) => {
            return {
                type,
                name,
                data: data ?? ops.defaultData(),
            };
        };
        return {
            type,
            config: ops,
            create,
            createColumnMeta: renderer => ({
                type,
                config: ops,
                create,
                renderer: {
                    type,
                    ...renderer,
                },
            }),
        };
    },
});
//# sourceMappingURL=column-config.js.map