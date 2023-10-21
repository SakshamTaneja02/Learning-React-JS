import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function HookCounterOne(){
    
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(() => {
        console.log('Use Effect Triggered ')
        document.title = `Click ${count} times`
    },[count])

    const increment = () => {
        setCount(prevState => prevState +1)
    }
    
    return(
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={increment}>Click Me {count} times</button>
        </div>
    )
}

export default HookCounterOne