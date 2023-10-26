import {useState,React} from 'react'


const Event = () => {
    const purple="#8e44ad"
    const [bg, setbg] = useState(purple);
    const [name, setname] = useState('Click Me')
    
    const bgchange=()=>{
        let newbg="Yellow"
        setbg(newbg)
        setname('Hi Dude 😉')
        console.log('Clicked')
    }

  return (
    <div style={{backgroundColor:bg}}>
      <button onClick={bgchange}>{name}</button>
    </div>
  )
}

export default Event
