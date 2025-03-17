import React,{useContext, useEffect,useState,useRef} from 'react'
import {JsMapData} from '../data/jsMap'
import { FilteredData } from '../data/filterBasedData';
import { Link } from 'react-router-dom';
import { ChevronDown ,CornerDownRight } from 'lucide-react';
function SideMenu() {

  const {jsMap} = useContext(JsMapData)
   
  return (
    <div id='main_sideMenu' className='overflow-hidden'>
      <h1  className='text-start py-4'>Get started</h1>
      {
        jsMap.map((map,index) => {
          return <SideBarOuterItem key={index} ind={index} category={map.category}  concepts={map.concepts} />;
        })
      }
    </div>
  )
}


function SideBarOuterItem({category,concepts,ind}){
  const [isListOpen,setIsListOpen] = useState(false)
  const {dispatch} = useContext(FilteredData)

  const hadleListDisplay = (ind)=>{
    setIsListOpen(!isListOpen)
    console.log(ind)
  }
  const handleDataFilter =(con)=>{
    dispatch({payload: con });
  }
  return (
    <>
     <div>
          <button className="listBtn_control block flex gap-2 items-end w-full text-start pl-3" 
           onClick={()=>hadleListDisplay()} >
           <span className=''>{category}</span>
           <ChevronDown size={24}  />
          </button>
          <ul id='collapsedList' className={!isListOpen ? "collapsedList" : ''}>
                {
                     concepts.map((con,index) => (
                        <Link to={`/exercises/${con}`} >
                         <li onClick={()=> handleDataFilter(con) }  key={index}   id='list_item' className="">
                          {con}
                         </li>
                         </Link>
                     )
                      
                     )
                      
                     
                    
                   
                   
                }
                
                
          </ul>
      
      </div>
     
    </>
  )
}


export default SideMenu