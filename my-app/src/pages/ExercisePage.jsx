import React , {useState,useContext,useEffect} from 'react'
import SideMenu from './SideMenu'
import Exercises from '../components/Exercises';
import { FilteredData } from '../data/filterBasedData';
import {useParams} from 'react-router-dom'
import Pagination from '../components/Pagination';
// import { Pagenate } from '../functions/PaginationData';
function ExercisePage() {
    const {page} = useParams()
    const {data} = useContext(FilteredData);
    const [dataForPage,setDataForPage]  = useState(null)
   
   useEffect(()=>{
    function Pagenate(page=1){
      for(let i = (page - 1) ; i < page ;i++){
          setDataForPage(data[i])
      }
    }
    Pagenate()
   },[])
    
  return (
    <main  className='flex relative'>
      <div id='mainExercisePage__gradient'></div>
       <img id='spider_chart' src="/Decagon.png"  />

       <aside id='exercisesAside' className='w-[20%] h-auto'>
         <SideMenu />
       </aside>
       <section  id='exercisesMain' className=' w-[80%] h-auto'>
          <div id='exersices__Background' className=' border border-slate-200  '>
          
           {
            Array.isArray(dataForPage)? dataForPage.map((data,index) => <Exercises  key={index}
                                         id={data.id}
                                         exercise={data.exercise}
                                         hint={data.hint}
                                         solution={data.solution}
            
            /> )
             :console.log(dataForPage)
          }
          
          </div>
          <div className='flex justify-center'>
          <Pagination />
          </div>
           
       </section>
    </main>
  )
}

export default ExercisePage