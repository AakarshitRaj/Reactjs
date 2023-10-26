import React from 'react'
import { useState } from 'react';

const Time = () => {
    let newTime=new Date().toLocaleTimeString();
    const [nime, setntime] = useState(newTime)

    const updateTime=()=>{
        newTime=new Date().toLocaleTimeString();
        setntime(newTime)
    }

  return (
    <div>
      <h1>{newTime}</h1>
      <button onClick={updateTime}>Click Me</button>
    </div>
  )
}

export default Time
