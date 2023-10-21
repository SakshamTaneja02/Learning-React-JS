import React from 'react'
import { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type)
    {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter : state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return intitialState
        default:
            return state
    }
}
const intitialState = {
    firstCounter: 0,
    secondCounter: 10
}

function CounterTwo(){
    
    const [count, dispatch] = useReducer(reducer, intitialState)
    
    return(
        <div>
            <div>Count:{count.firstCounter}</div>
            <button onClick={()=>{dispatch({type: 'increment', value: 1})}}>Increment</button>
            <button onClick={()=>{dispatch({type: 'decrement', value: 1})}}>Decrement</button>
            <button onClick={()=>{dispatch({type: 'increment',value: 5})}}>Increment 5</button>
            <button onClick={()=>{dispatch({type: 'decrement',value: 5})}}>Decrement  5</button>
            <div>Second Count:{count.secondCounter}</div>
            <button onClick={()=>{dispatch({type: 'increment2', value: 1})}}>Increment</button>
            <button onClick={()=>{dispatch({type: 'decrement2', value: 1})}}>Decrement</button>
            <button onClick={() => {dispatch({type: 'reset',value: 1})}}>Reset</button>
        </div>
    )
}

export default CounterTwo