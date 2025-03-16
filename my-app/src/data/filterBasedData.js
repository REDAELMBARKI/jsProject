import { useReducer ,useState,createContext } from "react";


const FilteredData = createContext([])
export const filteredDataProvider = () => {
   const [state,dispatch] = useReducer(reducer,initState)

   return(
    <FilteredData.Provider>

    </FilteredData.Provider>
   )
}