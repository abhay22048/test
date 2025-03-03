import { set } from 'mongoose'
import React, { useState } from 'react'

const useLogout = () => {
 const[loading,setLoading] = useState(false)
 const {setAuthUSer} = userAuthContext()

 const logout = async () => {
  setLoading(true)
  try {
    const res = await  fetch("/api/auth/logout",{
      method: "post",
      headers: {"Content-Type" : "application/json"}
    } );
    const data = await  res.json()
    if (data.error){
      throw new Error(data.error)
    }

    localStorage.removeItem("chat-user")
    setAuthUSer(null)
    
  } catch (error) {
    toast.error(error.message)
    
  }finally{
    setLoading(false)
  }
 };
 return {loading,logout};
}

export default useLogout