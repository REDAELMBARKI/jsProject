import React , {useState,useContext,useEffect} from 'react'
import SideMenu from './SideMenu'
import Exercises from '../components/Exercises';
import { dataContext } from '../data/data'
function ExercisePage() {
    const {data} = useContext(dataContext);
    
  return (
    <main  className='flex relative'>
      <div id='mainExercisePage__gradient'></div>
       <img id='spider_chart' src="/Decagon.png"  />

       <aside id='exercisesAside' className='w-[20%] p-3 h-auto'>
         <SideMenu />
       </aside>
       <section  id='exercisesMain' className=' w-[80%] h-auto'>
          <div id='exersices__Background' className=' border border-slate-200 my-3'>
          
           {
            data.map(data => <Exercises
                                         id={data.id}
                                         exercise={data.exercise}
                                         hint={data.hint}
                                         solution={data.solution}
            
            /> )
           }
          
          </div>
       </section>
    </main>
  )
}

export default ExercisePage