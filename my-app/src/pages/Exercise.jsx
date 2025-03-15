import React , {useState,useContext,useEffect} from 'react'
import SideMenu from './SideMenu'
import Exercises from '../components/Exercises';
import { dataContext } from '../data/data'
function ExercisePage() {
    const {data} = useContext(dataContext);
    useEffect(()=>{console.log(data)},[])
  return (
    <main className='flex gap-2'>
       <aside className='w-[20%] bg-slate-800 h-full'>
         <SideMenu />
       </aside>
       <section className='w-[80%] h-full'>
         <Exercises />
       </section>
    </main>
  )
}

export default ExercisePage