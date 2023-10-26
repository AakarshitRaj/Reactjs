import React, { useState } from 'react'

const Form = () => {
    const [name, setname] = useState('')
    const inputEvent=(event)=>{
        console.log(event.target.value)
        setname(event.target.value)
    }
  return (
    <div>
      <h1>Hello {name}</h1>
      <input type='text' placeholder='Enter Your Name' onChange={inputEvent}/>
      <button>Submit</button>
    </div>
  )
}

export default Form
