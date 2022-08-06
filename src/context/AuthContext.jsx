import React, {createContext, useState } from 'react'
export const AuthContext=createContext()

const AuthContextProvider = ({children}) => {
    const [auth,setAuth]=useState(false)
    
    const userLogin=()=>{
        setAuth(true)
    }

    const userLogout=()=>{
        setAuth(false)
    }
  return (
    <AuthContext.Provider value={{auth,userLogin,userLogout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider