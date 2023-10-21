import React from 'react'
import { useState, useEffect} from 'react'

function IntervalHookCounter(){
    
    const [count, setCount] = useState(0)

    useEffect(()=>{
        function doSomething(){
            console.log("Hello")
        }
        doSomething()
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    },[])

    const tick = () => {
        setCount(prevState => prevState + 1)
    }
    
    return(
        <h1>{count}</h1>
    )
}

export default IntervalHookCounter