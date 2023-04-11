import React, { useContext, useEffect, useState } from 'react'
import back from "../images/nature.jpg"
import Image from 'next/image'
import { AuthContext } from '@/context/authContext'
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import {MdLocationOn} from "react-icons/md"
import {AiTwotoneMail} from "react-icons/ai"
import {BsThreeDotsVertical} from "react-icons/bs"
import Link from 'next/link'
import Post from './Post'







function MainProfile() {
    const [data,setData] = useState("")

    const posts = [
      {
        id:1,
        name:"iman kamrava",
        userId: 1,
        profilepic : "https://media.licdn.com/dms/image/D4E03AQF2miu0lFPN4A/profile-displayphoto-shrink_800_800/0/1676478695714?e=2147483647&v=beta&t=2mDH3B_ektPudY0YH4E06hyAOJfby_E3FTdMwpU8jJE",
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        img: "https://www.crowdfunder.co.uk/p/nowruz/og-image?f=true&v=1678729360"
      },
      {
        id:2,
        name:"iman kamrava",
        userId: 2,
        profilepic : "https://media.licdn.com/dms/image/D4E03AQF2miu0lFPN4A/profile-displayphoto-shrink_800_800/0/1676478695714?e=2147483647&v=beta&t=2mDH3B_ektPudY0YH4E06hyAOJfby_E3FTdMwpU8jJE",
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        img: "https://www.crowdfunder.co.uk/p/nowruz/og-image?f=true&v=1678729360"
      },
      {
        id:3,
        name:"iman kamrava",
        userId: 3,
        profilepic : "https://media.licdn.com/dms/image/D4E03AQF2miu0lFPN4A/profile-displayphoto-shrink_800_800/0/1676478695714?e=2147483647&v=beta&t=2mDH3B_ektPudY0YH4E06hyAOJfby_E3FTdMwpU8jJE",
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        img: "https://www.crowdfunder.co.uk/p/nowruz/og-image?f=true&v=1678729360"
      },
    ]
  
    useEffect(()=>{
      setData(posts)
    },[])
    const {currentUser} =  useContext(AuthContext)
  const[user,setuser] = useState(null)
  useEffect(()=>{
    setuser(currentUser)
  },[])
  return (
    <div className='flex-[50%]  flex flex-col md:mx-5 px-5 md:my-5 mx-3 py-5 gap-5   '>
        <div className='relative'>
          <img className='hidden sm:block ' src="https://images.unsplash.com/photo-1584990302213-1248392c4892?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2692&q=80" />
          <img className=' top-[20px] rounded-full md:max-w-[150px] max-w-[100px] absolute md:top-[100px] mx-auto inset-x-0' src={user?.profilepic} alt="" />
        </div>
        
        <div className=' px-2 mt-10 md:px-10 rounded-2xl  bg-white dark:bg-slate-800 '>
            <p className='  pt-16 text-center text-2xl font-bold'>{user?.name}</p>
            <div className=' flex md:justify-between justify-evenly mt-5 items-center'>
                <div className='flex gap-3 items-center'>
                    <BsFacebook size={25}/>
                    <AiFillInstagram size={30}/>
                    <BsTwitter size={30}/>
                    <AiFillLinkedin size={30}/>
                   
                </div>
                <div className=' flex md:pr-24 gap-1'>
                <MdLocationOn size={20}/>
                    <span>USA</span>
                </div>
                <div className=' flex items-center gap-2'>
                  <AiTwotoneMail size={30}/>
                  <BsThreeDotsVertical size={25}/>
                </div>
                
            </div>
            <div className=' text-center mx-auto pt-5 pb-10'>
              <Link className=' bg-slate-500 px-2 text-white font-bold py-1 rounded-md'  href={"/"}>Follow</Link>
            </div>
            
        </div>

        <div className=' flex flex-col  items-center gap-5'>
      {data && data.map(item=>(
        <Post post={item} key={item.id}/>
      ))}
    </div>
        
    </div>
  )
}

export default MainProfile