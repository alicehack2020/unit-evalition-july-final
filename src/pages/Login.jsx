import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Navigate } from "react-router-dom";
import "./Login.modules.css"
import { useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext"
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  let navigate = useNavigate();
const {auth,userLogin}=useContext(AuthContext)
 
const haddnleLogin=()=>{
    axios.post("https://reqres.in/api/login",{
      email,password
    }).then((res)=>loginMessage())
  }
  


  const loginMessage=()=>{
    navigate("/");
    userLogin()
  }

  return (
    <div className='logindiv'>
      <input type="text" name="" id="" value={email} placeholder='enter Email Address' onChange={(e)=>setEmail(e.target.value)}/>
      <br />
      <input type="text" name="" id="" value={password} placeholder='enter Email Password' onChange={(e)=>setPassword(e.target.value)}/>
      <br />
      <button onClick={haddnleLogin} className="login_btn">login</button>
    </div>
  )
}

export default Login