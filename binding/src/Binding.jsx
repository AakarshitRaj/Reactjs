import React from 'react'
import { useState } from 'react'

const Binding = () => {
    const [username, setusername] = useState("")
  return (
    <div>
      <h1>Enter Your Name: </h1>
      <form>
        <input
            type='text'
            value={username}
            onChange={(e)=>{
                setusername(e.target.value)
            }}
        />
      </form>
    </div>
  )
}

export default Binding
