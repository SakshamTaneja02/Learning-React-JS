import React from 'react'
import useInput from '../hooks/useInput'

function UserForm() {
  
  const [first,bindFirst,resetFirst] = useInput('')
  const [last,bindLast,resetLast] = useInput("")

  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello ${first} ${last}`)
    resetFirst()
    resetLast()
  }

    return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label>First Name</label>
            <input type="text" {...bindFirst}/>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" {...bindLast}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
