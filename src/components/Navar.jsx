import React from 'react'
import { Link } from 'react-router-dom'
import "./Navar.modules.css"
const Navar = () => {
  return (
    <div className='navBar'>
        <Link className='nav' to="/">Home</Link>
        <Link className='nav' to="/login">login</Link>
        <Link className='nav' to="/cart">cart</Link>
    </div>
  )
}

export default Navar