
export const  Pagenate = (page=1,setDataForPage,data)=> {
        for(let i = (page - 1) ; i < 1 ;i++){
            setDataForPage(data[i])
        } 
}