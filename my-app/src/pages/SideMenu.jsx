import React,{useContext, useEffect,useState,useRef} from 'react'
import { jsMapData } from '../data/jsMap'
import { dataContext } from '../data/data';
import { ChevronDown ,CornerDownRight } from 'lucide-react';
function SideMenu() {

  const {jsMap} = useContext(jsMapData)



  return (
    <div id='main_sideMenu' className='overflow-hidden'>
      <h1  className='text-start py-4'>Get started</h1>
      {
        jsMap.map((map, index) => {
          return <SideBarOuterItem keym={index} category={map.category}  concepts={map.concepts} />;
        })
      }
    </div>
  )
}


function SideBarOuterItem({category,concepts,keym}){
  const [isListOpen,setIsListOpen] = useState(false)
  const [filteredData,setFilteredData] = useState(null)
  const {data} = useContext(dataContext)

  const hadleListDisplay = ()=>{
    setIsListOpen(!isListOpen)
  }
  const handleDatafilter = (concept)=>{
    const datawanted = data.filter(data => data.concept.toLowerCase() === concept.toLowerCase())
    setFilteredData(datawanted)
  }
  return (
    <>
     <div>
          <button className="listBtn_control block flex gap-2 items-end w-full text-start pl-3" 
           onClick={hadleListDisplay} >
           <span className=''>{category}</span>
           <ChevronDown size={24}  />
          </button>
          <ul key={keym} id='collapsedList' className={!isListOpen ? "collapsedList" : ''}>
                {
                     concepts.map((con,index) => (
                         <li onClick={()=>{handleDatafilter(con)}} key={index}  id='list_item' className="">
                          {con}
                         </li>
                       
                     )
                      
                     )
                      
                     
                    
                   
                   
                }
                
                
          </ul>
      
      </div>
     
    </>
  )
}


export default SideMenu