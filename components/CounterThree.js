import React from 'react'
import { useReducer } from 'react'

const reducer = (currState, action) => {
    switch(action)
    {
        case 'increment':
            return currState + 1
        case 'decrement':
            return currState - 1
        case 'reset':
            return intitialState
        default:
            return currState
    }
}
const intitialState = 0

function CounterThree(){
    
    const [count, dispatch] = useReducer(reducer, intitialState)
    const [countTwo,dispatchTwo] = useReducer(reducer, intitialState)
    
    return(
        <div>
            <div>Count:{count}</div>
            <button onClick={()=>{dispatch('increment')}}>Increment</button>
            <button onClick={()=>{dispatch('decrement')}}>Decrement</button>
            <button onClick={() => {dispatch('reset')}}>Reset</button>
            <div>Count:{countTwo}</div>
            <button onClick={()=>{dispatchTwo('increment')}}>Increment</button>
            <button onClick={()=>{dispatchTwo('decrement')}}>Decrement</button>
            <button onClick={() => {dispatchTwo('reset')}}>Reset</button>
        </div>
    )
}

export default CounterThree