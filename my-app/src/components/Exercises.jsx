import React,{useState,useEffect} from 'react'
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-javascript.min.js';

function Exercises({id,exercise,hint,solution}) {
  const [isHint,setIsHint] = useState(false)
  const [isSolution,setIsSolution] = useState(false)
  const [isSolutionLoading,setIsSolutionLoading] = useState(false)
  const [isHintLoading,setIsHintLoading] = useState(false)
  const handleHint =()=>{
    
    setIsHintLoading(true)
    setTimeout(()=>{
      setIsHintLoading(false)
      setIsSolution(false)
      setIsHint(!isHint)
    },300)
  }

  const handleSolution =()=>{
    setIsSolutionLoading(true)
    setTimeout(()=>{
      setIsSolutionLoading(false)
      setIsSolution(!isSolution)
      setIsHint(false)
    },300)
  }

  useEffect(() => {
    Prism.highlightAll(); // This highlights the code when component is mounted
  }, [isSolution]);

  return (
         <div className='my-10 '>
              <h3 id="questionNumber">Exersice {id}</h3>
              <div id='exercise' className=''>
                 {exercise}
              </div>
            
              <button className="btn btn_control block flex w-[150px]" onClick={handleHint}>
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
          
              <button className="btn btn_control block flex w-[150px] mt-3" onClick={handleSolution}>
                {
                  isSolutionLoading ? <span className="loading loading-spinner"></span> :  "solution"
                }
             </button>
              {
                isSolution &&
                <pre  className='mt-40 '>
                  <code className='language-javascript'>
                     {solution}
                  </code>
                </pre>
              }
         </div>
   )
}

export default Exercises