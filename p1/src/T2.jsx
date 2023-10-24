import React, { useState } from 'react'
import './T2.css'
function T2() {
    const student={
        name:'aakarshit',
        roll:'20051766'
    }
    const [mark, setmark] = useState(70)//initialize with 70
    return (      
<>
    <p className='name'>Name={student.name}</p>
    my marks={mark}
    <button onClick={()=>{
        {setmark(66)}//change to 66
    }
}
>Update</button>
    
</>
  )
}
export default T2
