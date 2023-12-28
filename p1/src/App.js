import './App.css';
import T1 from './T1';
import IMG from './IMG';
import T2 from './T2';
import T3 from './T3';
import { useState } from 'react';
import Aditya from './Aditya';


function App() {
  const [user, setuser] = useState("Aakarshit")//for prop
  const [user1, setuser1] = useState("Aditya")

  return (
    
    <div>
      <h1>Aditya </h1>
         <T1 v={user1}/>
         <IMG/>     
         <T2/>
         <T3 u={user}/>
         <br></br>
         <div className='home'>
         <h1>This is my Home Page</h1>
         <Aditya/>
         </div>
    </div>
  );
}

export default App;
