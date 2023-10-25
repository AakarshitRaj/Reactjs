import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Header/>
      <section>
        <h1>This is Home Page</h1>
      </section>
      <Outlet/>
    </div>
  )
}

export default Home
