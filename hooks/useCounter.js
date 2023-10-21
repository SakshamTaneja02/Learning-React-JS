import {useState} from 'react'

function useCounter(initialValue = 0,value = 1) {
    const [count,setCount] = useState(initialValue)

    const increment = () => {
        setCount(prev=>prev+value)
    }
    const decrement = () => {
        setCount(prev=>prev-value)
    }
    const reset = () => {
        setCount(initialValue)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
