import React from 'react'
import {Link} from 'react-router-dom'
const Contact = () => {
  return (
    <div>
      <header>
      This is Contact Page
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
      </header>
      
    </div>
  )
}

export default Contact
