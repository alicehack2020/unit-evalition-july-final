import React, { useContext, useEffect } from 'react'
import {AuthContext} from "../context/AuthContext"
import { useNavigate} from "react-router-dom";

const ProtectedRoutes = (props) => {
    const {auth}=useContext(AuthContext)
    const {Components}=props
    let navigate = useNavigate();
      useEffect(()=>{
      if(auth==false)
      {
        navigate("/login");
      }
    })

  return (
      <Components/>
  )
}

export default ProtectedRoutes