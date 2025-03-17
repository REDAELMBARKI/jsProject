import React,{useReducer,createContext,useContext} from "react";
import { FilteredData } from "../data/filterBasedData";



export const  Pagenate = (page=1,data)=> {
   return data[page - 1] || null;
}


const initState = (data) => ({
   data,
   dataForPage: Pagenate(1, data),
   pageIndex: 1,
});

const reducer = (state,action) =>{
switch(action.type){
   case 'prev' :
      return{  
      
         pageIndex :  state.pageIndex + 1,
         dataForPage : Pagenate(pageIndex,state.data)
         
      }
   case 'next' :
      return{
      
         pageIndex :  state.pageIndex - 1 ,
         dataForPage : Pagenate(pageIndex,state.data)
         
      
     }
   
}
}

export const PagenationContext = createContext()

export const PaginationContextProvider = ({children})=>{
      const {data} = useContext(FilteredData);

    const [state,dispatch] = useReducer(reducer,initState(data))
     return (
    <PagenationContext.Provider value={{dispatch,state}}>
       {children}
     </PagenationContext.Provider>
     )
}
  
    