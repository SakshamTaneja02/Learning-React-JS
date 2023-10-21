import React,{useState, useEffect} from 'react'

function DocTitleOne() {
  
  const [count,setCount] = useState(0)

  useEffect(()=>{
    document.title = `${count}`
  },[count])
  
    return (
    <div>
      <button onClick={()=> {setCount(prev => prev+1)}}>Increment {count}</button> 
    </div>
  )
}

export default DocTitleOne
