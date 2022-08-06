import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Navigate } from "react-router-dom";
import "./Login.modules.css"
import {AuthContext} from "../context/AuthContext"
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
const {auth,userLogin}=useContext(AuthContext)
 
const haddnleLogin=()=>{
    axios.post("https://reqres.in/api/login",{
      email,password
    }).then((res)=>loginMessage())
  }
  


  const loginMessage=()=>{
    alert("Login Sucessfuly") 
    userLogin()
  }

  return (
    <div className=''>
      <input type="text" name="" id="" value={email} placeholder='enter Email Address' onChange={(e)=>setEmail(e.target.value)}/>
      <br />
      <input type="text" name="" id="" value={password} placeholder='enter Email Password' onChange={(e)=>setPassword(e.target.value)}/>
      <br />
      <button onClick={haddnleLogin} className="login_btn">login</button>
    </div>
  )
}

export default Login