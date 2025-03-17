import { Pagenate } from "./pagenate"

export const handleNextBtn = (pageIndex,setPageIndex,data) => {
     if(pageIndex < data.length){
        setPageIndex(prev => prev + 1)
     }
    console.log(pageIndex)

}