import React,{useContext, useEffect,useState} from 'react'
import { jsMapData } from '../data/jsMap'

function SideMenu() {

  const {jsMap} = useContext(jsMapData)
  const hadleListDisplay = ()=>[

  ]


  return (
    <div id='main_sideMenu' className='overflow-hidden'>
       <SideBarOuterItem />
    </div>
  )
}


function SideBarOuterItem(){
  return (
    <>
     <p>
          <button class="" onClick={hadleListDisplay} >category </button>
          <ul class="collapse">
              <li class="">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </li>
          </ul>
      
      </p>
     
    </>
  )
}


export default SideMenu