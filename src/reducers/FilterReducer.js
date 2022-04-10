export const filterReducer = (stateFilter, actionFilter) => {
    switch (actionFilter.type) {
        case "CLEAR":
            return { ...stateFilter, search: "", sort: "", filterLabels: "" };

        case "SEARCH":
            return { ...stateFilter, search: actionFilter.payload };

        case "SORT":
            return { ...stateFilter, sort: actionFilter.payload };

        case "LABELS":
            return { ...stateFilter, filterLabels: actionFilter.payload };

        default:
            return stateFilter;
    }
};
