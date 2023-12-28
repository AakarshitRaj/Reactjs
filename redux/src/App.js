import './App.css';

function App() {
  return (
    <>
    <h1>Welcome To Redux</h1>
        <h2>Increment/Decrement Counter</h2>
        <h4>Using React and Redux </h4>

        <div className='quantity'>
          <a className='quantity_minus' title='Decrement'><span>-</span></a>
          <input name='quantity' type='text' className='quantity_input' value='0'/>
          <a className='quantity_plus' title='Increment'><span>+</span></a>

        </div>

    
    </>
  );
}

export default App;
