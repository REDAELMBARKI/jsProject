import React , {useState,useContext,useEffect} from 'react'
import SideMenu from './SideMenu'
import Exercises from '../components/Exercises';
import { dataContext } from '../data/data'
function ExercisePage() {
    const {data} = useContext(dataContext);
    useEffect(()=>{console.log(data)},[])
  return (
    <main className='flex '>
       <aside id='exercisesAside' className='w-[20%] p-3 min-h-[100vh]'>
         <SideMenu />
       </aside>
       <section  id='exercisesMain' className='w-[80%] p-3 min-h-[100vh]'>
         <Exercises />
       </section>
    </main>
  )
}

export default ExercisePage