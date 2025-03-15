import React,{useState} from 'react'

function Exercises({id,exercise,hint,solution}) {
  const [isHint,setIsHint] = useState(false)
  const [isSolution,setIsSolution] = useState(false)
  const [isSolutionLoading,setIsSolutionLoading] = useState(false)
  const [isHintLoading,setIsHintLoading] = useState(false)
  const handleHint =()=>{
    
    setIsHintLoading(true)
    setTimeout(()=>{
      setIsHintLoading(false)
      setIsHint(!isHint)
    },300)
  }

  const handleSolution =()=>{
    setIsSolutionLoading(true)
    setTimeout(()=>{
      setIsSolutionLoading(false)
      setIsSolution(!isSolution)
    },300)
  }
  return (
         <div className='my-10 '>
              <h3 id="questionNumber">Exersice {id}</h3>
              <div id='exercise'>
                 {exercise}
              </div>
            
              <button className="btn block flex w-[150px]" onClick={handleHint}>
                {
                  isHintLoading ? <span className="loading loading-spinner"></span> :  "use a hint"
                }
              
             
             </button>
              {
                isHint && 
                <div  id='hint'>
                  {hint}
                </div>
              }
          
              <button className="btn block flex w-[150px]" onClick={handleSolution}>
                {
                  isSolutionLoading ? <span className="loading loading-spinner"></span> :  "solution"
                }
             </button>
              {
                isSolution &&
                <div>
                {solution}
                </div>
              }
         </div>
   )
}

export default Exercises