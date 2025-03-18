import React,{useReducer,createContext,useContext} from "react";
import { FilteredData } from "../data/filterBasedData";
import { DataMiddleWare } from "../functions/DataMiddleWare";


let data = DataMiddleWare();




const initState = (data) => ({
   data,
   dataForPage: Pagenate(1, data),
   pageIndex: 1,
});

const reducer = (state,action) =>{
switch(action.type){
   case 'prev' :
      
      return{  
         ...state,
         pageIndex :  state.pageIndex - 1,
         dataForPage : Pagenate(state.pageIndex,state.data)
         
      }
   case 'next' :
      return{
         ...state,
         pageIndex :  state.pageIndex + 1 ,
         dataForPage : Pagenate(state.pageIndex,state.data)
         
      
     }
     default:
      return state;

}
}

export const PagenationContext = createContext()

// export const PagenationContextProvider = ({children})=>{

//     const [state,dispatch] = useReducer(reducer,data,initState)
//      return (
//     <PagenationContext.Provider value={{dispatch,state}}>
//        {children}
//      </PagenationContext.Provider>
//      )
// }
  
    