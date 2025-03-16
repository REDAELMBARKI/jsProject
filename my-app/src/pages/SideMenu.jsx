import React,{useContext, useEffect,useState} from 'react'
import { jsMapData } from '../data/jsMap'
import { ChevronDown ,CornerDownRight } from 'lucide-react';
function SideMenu() {

  const {jsMap} = useContext(jsMapData)



  return (
    <div id='main_sideMenu' className='overflow-hidden'>
      <h1  className='text-start py-4'>Get started</h1>
       <SideBarOuterItem />
    </div>
  )
}


function SideBarOuterItem(){
  const [isListOpen,setIsListOpen] = useState(true)
  const hadleListDisplay = ()=>[
  setIsListOpen(!isListOpen)
  ]
  return (
    <>
     <div>
          <button className="listBtn_control block flex gap-2 items-end w-full text-start pl-3" onClick={hadleListDisplay} >
           <span className=''> category </span>
           <ChevronDown size={24}  />
          </button>
          <ul id='collapsedList' className={!isListOpen ? "collapsedList" : ''}>
               <li id='list_item' className="">
              
                   test 1
                </li>
                
          </ul>
      
      </div>
     
    </>
  )
}


export default SideMenu