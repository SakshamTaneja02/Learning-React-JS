import React,{useState} from 'react'

function CounterOne() {
  
    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(prev=>prev+1)
    }
    const decrement = () => {
        setCount(prev=>prev-1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset }>reset</button>
    </div>
  )
}

export default CounterOne
