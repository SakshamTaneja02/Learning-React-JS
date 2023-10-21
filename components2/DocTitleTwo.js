import React,{useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'


function DocTitleTwo() {
  
  const [count,setCount] = useState(0)

  useDocumentTitle(count)
  
    return (
    <div>
      <button onClick={()=> {setCount(prev => prev+1)}}>Increment {count}</button> 
    </div>
  )
}

export default DocTitleTwo