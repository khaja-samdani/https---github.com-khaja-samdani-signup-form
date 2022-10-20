import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/">Home page</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/formdata">form data</Link>
    </div>
  )
}

export default Navbar