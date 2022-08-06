import React from 'react'
import { Link } from 'react-router-dom'
import "./Navar.css"
const Navar = () => {
  return (
    <div>
        <Link className='nav' to="/">Home</Link>
        <Link className='nav' to="/login">login</Link>
        <Link className='nav' to="/cart">cart</Link>
    </div>
  )
}

export default Navar