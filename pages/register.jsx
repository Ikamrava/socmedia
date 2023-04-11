import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

function register() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")


  async function registerHandler(e){
    e.preventDefault()
    const response = await fetch("api/auth/register",{
      method : "POST",
      body : JSON.stringify({
        username,
        password,
        email,
        name
      }),
      headers:{
        "Content-Type":"application/json"
      }
    })

    const data = await response.json()
    console.log(data)
   }

  return (
    <div className=' bg-slate-600 h-screen pt-10'>
      <div className='max-w-4xl flex flex-col items-center  md:flex-row mx-auto  rounded-xl   '>
        
        <div className=' flex flex-col flex-1 w-[80%] px-10 bg-white py-10   md:rounded-l-2xl   '>
          <h1 className=' text-2xl font-bold text-gray-600 mb-10 ' >Register</h1>
          <label className=' text-gray-600' >Username</label>
          <input className=' border-b-2 mb-5 ' type="text" onChange={(e)=>{setUsername(e.target.value)}} />
          <label className=' text-gray-600' >Password</label>
          <input className=' border-b-2 mb-10 ' type="password" onChange={(e)=>{setPassword(e.target.value)}} />
          <label className=' text-gray-600' >Email</label>
          <input className=' border-b-2 mb-10 ' type="email" onChange={(e)=>{setEmail(e.target.value)}} />
          <label className=' text-gray-600' >Name</label>
          <input className=' border-b-2 mb-10 ' type="text"  onChange={(e)=>{setName(e.target.value)}}/>
          <button className=' bg-violet-500 py-2 text-white font-bold mb-6 mt-1' onClick={registerHandler}>Register</button>
          <p className=' md:hidden text-center mb-2 pt-10'>Do you have an account?</p>
          <Link className=" md:hidden text-center bg-slate-700 text-white py-2" href="/login">Login</Link>
        </div>

        <div className=" hidden  md:flex flex-col flex-1 bg-cover bg-center px-10 rounded-r-2xl py-20  bg-[url('https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]" >
          <h1 className=' text-6xl text-white font-bold pt-10 '>Welcome to SocMedia</h1>
          <p className=' text-white pt-10'>What is Social Media? Social media refers to the means of interactions among people in which they create, share, and/or exchange information and ideas in virtual communities and networks</p>
          <p className=' text-white py-4'>Do you have an account?</p>
          <Link className=" text-center bg-white px-2 py-3    " href="/login">Login</Link>
        </div>


      </div>
    </div>
  )
}

export default register