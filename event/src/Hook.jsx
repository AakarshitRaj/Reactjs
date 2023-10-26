import React from 'react'
import { useState } from 'react'

const Hook = () => {
    const [cnt, setcnt] = useState('0')
    const inc=()=>{
        console.log('clicked')
        setcnt(cnt+1)

    }
  return (
    <div>
      <h1>{cnt}</h1>
      <button onClick={inc}>Click ME👌</button>
    </div>
  )
}

export default Hook
