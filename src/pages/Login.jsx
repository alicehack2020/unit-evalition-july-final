import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Navigate } from "react-router-dom";

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
    <div>
      <input type="text" name="" id="" value={email} placeholder='enter Email Address' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" name="" id="" value={password} placeholder='enter Email Password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={haddnleLogin}>login</button>
    </div>
  )
}

export default Login