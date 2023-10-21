import React from 'react'
import {useState, useMemo} from 'react'

function Counter() {
  
  const [one,setOne] = useState(0)
  const [two,setTwo] = useState(0)
  
  const incrementOne = () => {
    setOne(one+1)
  }

  const incrementTwo = () => {
    setTwo(two+1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while(i<2000000000) i++
    return one%2===0
  },[one])
  
  return (
    <div>
      <button onClick={incrementOne}>{one}</button>
      <span>{isEven?'Even':'Odd'}</span>
      <button onClick={incrementTwo}>{two}</button>
    </div>
  )
}

export default Counter
