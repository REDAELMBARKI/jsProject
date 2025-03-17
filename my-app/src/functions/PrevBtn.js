import { Pagenate } from "./pagenate"

export const handlePrevBtn = (pageIndex,setPageIndex) => {
    console.log("minus")
     if(pageIndex > 1){
        setPageIndex(prev => prev - 1)
     }
}