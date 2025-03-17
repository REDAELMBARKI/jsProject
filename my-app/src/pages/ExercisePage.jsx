import React , {useState,useContext,useEffect} from 'react'
import SideMenu from './SideMenu'
import Exercises from '../components/Exercises';
import {useParams} from 'react-router-dom'
import { PagenationContext } from '../reducers/PagenationReducer';
// import { Pagenate } from '../functions/PaginationData';
function ExercisePage() {
    const {page} = useParams()
    const {dispatch,state} = useContext(PagenationContext)
   
  return (
    <main  className='flex relative'>
      <div id='mainExercisePage__gradient'></div>
       <img id='spider_chart' src="/Decagon.png"  />

       <aside id='exercisesAside' className='w-[20%] h-auto'>
         <SideMenu />
       </aside>
       <section  id='exercisesMain' className=' w-[80%] h-auto'>
          <div id='exersices__Background' className=' border border-slate-200  '>
          
           {    state.dataForPage &&
            <>
              <Exercises  key={dataForPage?.id}
                                         id={dataForPage?.id}
                                         exercise={dataForPage?.exercise}
                                         hint={dataForPage?.hint}
                                         solution={dataForPage?.solution} />
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