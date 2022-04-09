export const filterReducer = (stateFilter, actionFilter) => {
    switch (actionFilter.type) {
        case "LOW":
            return {
                ...stateFilter,
                priority: {
                    ...stateFilter["priority"],
                    low: !stateFilter.priority.low,
                },
            };

        case "HIGH":
            return {
                ...stateFilter,
                priority: {
                    ...stateFilter["priority"],
                    high: !stateFilter.priority.high,
                },
            };

        default:
            return stateFilter;
    }
};
