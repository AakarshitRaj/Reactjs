import React from 'react'

const Monu = () => {

    const aak= {
        name:'Aditya Raj Singh',
        Roll:205
    }
    // const niti={
    //     name:'Nitish',
    //     Roll:1
    // }

    
  return (
    <div>
      <h1>{aak.name}</h1>
      {aak.Roll}
      {/* {niti.name}
      {niti.Roll} */}
    </div>
  )
}

export default Monu
