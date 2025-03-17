import React , {useState,useContext,useEffect} from 'react'
import SideMenu from './SideMenu'
import Exercises from '../components/Exercises';
import { FilteredData } from '../data/filterBasedData';
import {useParams} from 'react-router-dom'
import { Pagenate } from '../functions/pagenate';
import { handlePrevBtn } from '../functions/PrevBtn';
import { handleNextBtn } from '../functions/NextBtn';
// import { Pagenate } from '../functions/PaginationData';
function ExercisePage() {
    const {page} = useParams()
    const {data} = useContext(FilteredData);
    const [dataForPage,setDataForPage]  = useState(null)
    const [pageIndex ,setPageIndex] = useState(1)
    
   useEffect(()=>{
    Pagenate(pageIndex,setDataForPage,data)
   },[data])
  return (
    <main  className='flex relative'>
      <div id='mainExercisePage__gradient'></div>
       <img id='spider_chart' src="/Decagon.png"  />

       <aside id='exercisesAside' className='w-[20%] h-auto'>
         <SideMenu />
       </aside>
       <section  id='exercisesMain' className=' w-[80%] h-auto'>
          <div id='exersices__Background' className=' border border-slate-200  '>
          
           {    dataForPage &&
            <>
              <Exercises  key={dataForPage?.id}
                                         id={dataForPage?.id}
                                         exercise={dataForPage?.exercise}
                                         hint={dataForPage?.hint}
                                         solution={dataForPage?.solution} />
              <div className='flex justify-between mb-4'>
                    
                      <button onClick={()=>handlePrevBtn(pageIndex,setPageIndex)} className=" py-4 flex-col btn_prevNext w-[200px] gap-0  ">
                        {/* <ChevronLeft /> */}
                        <p className=''>Exersice</p>
                      </button>
                      
                      <button onClick={()=> handleNextBtn(pageIndex,setPageIndex,data)} className="join-item btn_prevNext w-[200px] py-4 ">next</button>
                  
              </div>
            </>
           }
          
           
          </div>
         
       </section>
    </main>
  )
}

export default ExercisePage