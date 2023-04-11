import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { func } from 'prop-types'
import { AuthContext } from '@/context/authContext'
import { useRouter } from 'next/router'

function login() {
  const {login} = useContext(AuthContext)
  const {currentUser} = useContext(AuthContext)
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const router = useRouter();
  async function  loginHandler(){
    // await login(username,password)
    // if(currentUser != null){
      
    // }
    router.push("/")
    
  }


  return (
    <div className=' bg-slate-600 h-screen pt-28'>
      <div className='max-w-4xl flex flex-col items-center  md:flex-row mx-auto  rounded-xl   '>
        <div className=" hidden  md:flex flex-col flex-1 bg-cover bg-center px-10 rounded-l-2xl py-20  bg-[url('https://images.unsplash.com/photo-1573152143286-0c422b4d2175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]" >
          <h1 className=' text-6xl text-white font-bold  '>Welcome to SocMedia</h1>
          <p className=' text-white pt-10'>What is Social Media? Social media refers to the means of interactions among people in which they create, share, and/or exchange information and ideas in virtual communities and networks</p>
          <p className=' text-white py-4'>Don't you have an account?</p>
          <Link className=" text-center bg-white px-2 py-3 mb-1   " href="/register">Register</Link>
        </div>


        <div className=' flex flex-col flex-1 w-[80%] px-10 bg-white py-28   md:rounded-r-2xl   '>
          <h1 className=' text-2xl font-bold text-gray-600 mb-10 ' >Login</h1>
          <label className=' text-gray-600' htmlFor="username">Username</label>
          <input className=' border-b-2 mb-5 ' type="text" onChange={(e)=>{setUsername(e.target.value)}} />
          <label className=' text-gray-600' htmlFor="Password">Password</label>
          <input className=' border-b-2 mb-10 ' type="password" onChange={(e)=>{setPassword(e.target.value)}} />
          <button className=' bg-violet-500 py-2 text-white font-bold mb-6 mt-1' onClick={loginHandler}>Login</button>
          <p className=' md:hidden text-center mb-2 pt-10'>Don't you have an account?</p>
          <Link className=" md:hidden text-center bg-slate-700 text-white py-2" href="/register">Register</Link>
        </div>


      </div>
    </div>
  )
}

export default login