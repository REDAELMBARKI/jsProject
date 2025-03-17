import React,{useReducer,createContext} from "react";
 
const initState = {
   dataForPage : null,
   pageIndex : 1
}
const reducer = () =>{
switch(action.type){
   case 'prev' :
   {
      
   }
   case 'next' :
   {

   }
   
}
}

export const PagenationContext = createContext()

export const PaginationContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initState)
     return (
    <PagenationContext.Provider value={{dispatch}}>
       {children}
     </PagenationContext.Provider>
     )
}
  
    