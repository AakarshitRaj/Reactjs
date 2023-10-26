import React, { useState } from 'react'

const Form = () => {
    const [name, setname] = useState('')
    const [fname, setfname] = useState('')
    const inputEvent=(event)=>{
        console.log(event.target.value)
        setname(event.target.value)
    }
    const onsubmit=()=>{
        setfname(name)
    }
  return (
    <div>
      <h1>Hello {fname}</h1>
      <input type='text' placeholder='Enter Your Name' onChange={inputEvent}/>
      <button onClick={onsubmit}>Submit</button>
    </div>
  )
}

export default Form
