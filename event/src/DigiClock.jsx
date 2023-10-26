import React from 'react'
import { useState } from 'react'

const DigiClock = () => {
    let newTime=new Date().toLocaleTimeString();
    const [ntime, setntime] = useState(newTime)

    const updateTime=()=>{
        newTime=new Date().toLocaleTimeString();
        setntime(newTime)
    }
    setInterval(updateTime,1000)
  return (
    <div>
        <div >
      <h1 style={{backgroundColor:'grey', width:'400px'}}>DigiClock: {newTime}</h1>
    </div>
    </div>
  )
}

export default DigiClock
