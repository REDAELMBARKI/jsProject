import React , {useState,useContext,useEffect, useReducer} from 'react'
import SideMenu from './SideMenu'
import Exercises from '../components/Exercises';
import {useParams} from 'react-router-dom'
import { FilteredData } from '../data/filterBasedData';


function ExercisePage() {
    const {page} = useParams()
    
    const {data} = useContext(FilteredData)
    // const [dataForPage,setDataForPage] = useState(null)
    // const [pageIndex,setPageIndex] = useState(1)
  console.log(data)

  function Pagenate(page = 1, data) {
    if (!data || data.length === 0) return null;
    return data[page - 1] || null;
}
  

    const DATA_FOR_PAGE_INITIAL_STATE = {
      dataForPage: Pagenate(1, data ?? []),
      pageIndex: 1,
   };

   useEffect(() => {
    if (data && data.length > 0) {
        dispatch({ type: 'update', payload: Pagenate(1, data) });
    }
}, [data]);

   const DataForPagereducer = (state,action) =>{
    switch(action.type){
      case 'update': // New case to update data when it loads
      return {
          ...state,
          dataForPage: action.payload,
          pageIndex: 1,
      }
       case 'prev' :
        const newPageIndexP = state.pageIndex - 1
        return {  
            ...state,
            pageIndex: newPageIndexP,
            dataForPage: Pagenate(newPageIndexP, data)
        }
       case 'next' :
            const newPageIndexN = state.pageIndex + 1
            return {  
                ...state,
                pageIndex: newPageIndexN,
                dataForPage: Pagenate(newPageIndexN, data)
            }
         
         default:
          return state;
    
    }
    }
    

    const [DataState,dispatch] = useReducer(DataForPagereducer,DATA_FOR_PAGE_INITIAL_STATE)
    console.log(DataState)
   
    
  return (
    <main  className='flex relative'>
      <div id='mainExercisePage__gradient'></div>
       <img id='spider_chart' src="/Decagon.png"  />

       <aside id='exercisesAside' className='w-[20%] h-auto'>
         <SideMenu />
       </aside>
       <section  id='exercisesMain' className=' w-[80%] h-auto'>
          <div id='exersices__Background' className=' border border-slate-200  '>
          
           {    DataState.dataForPage &&
            <>
              <Exercises  key={DataState.dataForPage?.id}
                                         id={DataState.dataForPage?.id}
                                         exercise={DataState.dataForPage?.exercise}
                                         hint={DataState.dataForPage?.hint}
                                         solution={DataState.dataForPage?.solution} />
              <div className='flex justify-between mb-4'>
                    
                      <button disabled={DataState.pageIndex === 1}  onClick={()=> dispatch({type :'prev'})}  className=" py-4 flex-col btn_prevNext w-[200px] gap-0  ">
                        {/* <ChevronLeft /> */}
                        <p className=''>Exersice</p>
                      </button>
                      
                      <button disabled={DataState.pageIndex === data.length} onClick={()=> dispatch({type :'next'})}  className="join-item btn_prevNext w-[200px] py-4 ">next</button>
                  
              </div>
            </>
           }
          
           
          </div>
         
       </section>
    </main>
  )
}

export default ExercisePage