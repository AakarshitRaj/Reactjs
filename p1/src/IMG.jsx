import React from 'react'
const user = {
    name: 'Kendall Jenner',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Kendall_Jenner_at_Met_Gala_2021_5.jpg',
    imageSize: 200,
  }
function IMG() {
  return (
    <div>
   <h1>{user.name}</h1>
      <img src={user.imageUrl} alt={user.name} width={user.imageSize} />
    </div>
  )
}

export default IMG;