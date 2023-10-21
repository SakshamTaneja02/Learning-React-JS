import React from 'react'
import { useState, useEffect } from 'react'

function HookMouse(){
    
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('Log Mouse')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect triggered")
        window.addEventListener('mousemove',logMousePosition)

        return () => {
            console.log("Component Unmounted")
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
    
    return(
        <div>
            X:{x}  Y:{y}
        </div>
    )
}

export default HookMouse