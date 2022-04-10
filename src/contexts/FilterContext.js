import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/FilterReducer";

const FIlterContext = createContext(null);

const FilterContextProvider = ({ children }) => {
    const [stateFilter, dispatchFilter] = useReducer(filterReducer, {
        search: "",
        sort: "",
        filterLabels: "",
    });

    return (
        <FIlterContext.Provider value={{ stateFilter, dispatchFilter }}>
            {children}
        </FIlterContext.Provider>
    );
};

const useFilter = () => useContext(FIlterContext);

export { FilterContextProvider, useFilter };
