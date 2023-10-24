import './App.css';
import T1 from './T1';
import IMG from './IMG';
import T2 from './T2';
import T3 from './T3';
import { useState } from 'react';
import Routing from './Routing';


function App() {
  const [user, setuser] = useState("Aakarshit")//for prop
  return (
    
    <div>
         <T1/>
         <IMG/>     
         <IMG>I love you</IMG> 
         <T2/>
         <T3 u={user}/>
         <br></br>
         <div className='home'>
         <h1>This is my Home Page</h1>
         </div>
    </div>
  );
}

export default App;
