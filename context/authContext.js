"use client"
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

    const getFromLocalStorage = (key) => {
        if (!key || typeof window === 'undefined') {
            return null
        }
        return localStorage.getItem(key)
      }

    // const [currentUser,setCurrentUser] = useState(JSON.parse(getFromLocalStorage("user") || "null"))
    const [currentUser,setCurrentUser] = useState("iman.kamrava")


useEffect(()=>{
  // localStorage.setItem("user",JSON.stringify(currentUser))
},[])

// const login = async(username,password)=>{
//     const response = await fetch("api/auth/login",{
//         method : "POST",
//         body : JSON.stringify({
//           username,
//           password,
//         }),
//         headers:{
//           "Content-Type":"application/json"
//         }
//       })
  
//       const data = await response.json()
//       console.log(data)
      
//     //   setCurrentUser(data[0].username ? data : null)
// }

function login(){
  
}

return (

    <AuthContext.Provider value={{login,currentUser}}>{children}</AuthContext.Provider>
)
}