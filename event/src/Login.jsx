import React, { useState } from 'react'

const Login = () => {
    const [name, setname] = useState('')
    const [fname, setfname] = useState('')
    const [lastName, setlastName] = useState('')
    const [lastNamenew, setlastNamenew] = useState('')

    const inputEvent=(event)=>{
        console.log(event.target.value)
        setname(event.target.value)
    }
    const inputEventTwo=(event)=>{
        console.log(event.target.value)
        setlastName(event.target.value)
    }
    const onsubmit=(event)=>{
        event.preventDefault();//used to avoid dedault behaviour of form
        setfname(name)
        setlastNamenew(lastName)
    }
  return (
    <div>
        <form onSubmit={onsubmit}>
      <h1>Hello {fname} {lastNamenew}</h1>
      <input type='text' placeholder='Enter Your First Name' onChange={inputEvent} value={name}/>
      <input type='text' placeholder='Enter Your Last Name' onChange={inputEventTwo} value={lastName}/>
      <button type='submit'>Submit</button></form>
    </div>
  )
}

export default Login
