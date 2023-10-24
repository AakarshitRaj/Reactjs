import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<div>Home Page</div>}/>
        <Route path="/about" element={<div>About Page</div>}/>
        <Route path="/product" element={<div>Product Page</div>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Navbar