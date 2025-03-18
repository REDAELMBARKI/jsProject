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


    const  Pagenate = (page=1)=> {
       return data[page - 1];
    }
    
    useEffect(()=>{
      Pagenate()
    },[data])
    const DATA_FOR_PAGE_INITIAL_STATE = {
      dataForPage: Pagenate(2),
      pageIndex: 1,
   };
   const DataForPagereducer = (state,action) =>{
    switch(action.type){
       case 'prev' :
          
          return{  
             ...state,
             pageIndex :  state.pageIndex - 1,
             dataForPage : Pagenate(state.pageIndex)
             
          }
       case 'next' :
          return{
             ...state,
             pageIndex :  state.pageIndex + 1 ,
             dataForPage : Pagenate(state.pageIndex)
             
          
         }
         default:
          return state;
    
    }
    }
    
    
      
        
    const [DataState,dispatch] = useReducer(DataForPagereducer,DATA_FOR_PAGE_INITIAL_STATE)
    
   
    
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
              <Exercises  key={dataForPage?.id}
                                         id={DataState.dataForPage?.id}
                                         exercise={DataState.dataForPage?.exercise}
                                         hint={DataState.dataForPage?.hint}
                                         solution={DataState.dataForPage?.solution} />
              <div className='flex justify-between mb-4'>
                    
                      <button onClick={()=> dispatch({action :'prev'})}  className=" py-4 flex-col btn_prevNext w-[200px] gap-0  ">
                        {/* <ChevronLeft /> */}
                        <p className=''>Exersice</p>
                      </button>
                      
                      <button onClick={()=> dispatch({action :'next'})}  className="join-item btn_prevNext w-[200px] py-4 ">next</button>
                  
              </div>
            </>
           }
          
           
          </div>
         
       </section>
    </main>
  )
}

export default ExercisePage