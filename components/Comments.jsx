import { AuthContext } from '@/context/authContext'
import React, { useContext, useEffect, useState } from 'react'
import Avatar from 'react-avatar'

function Comments() {
    const {currentUser} =  useContext(AuthContext)
    const[user,setuser] = useState(null)
    useEffect(()=>{
      setuser(currentUser)
    },[currentUser])
    const posts = [
        {
          id:1,
          name:"iman kamrava",
          userId: 1,
          profilepic : "https://media.licdn.com/dms/image/D4E03AQF2miu0lFPN4A/profile-displayphoto-shrink_800_800/0/1676478695714?e=2147483647&v=beta&t=2mDH3B_ektPudY0YH4E06hyAOJfby_E3FTdMwpU8jJE",
          comment: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
          
        },
        {
          id:2,
          name:"iman kamrava",
          userId: 2,
          profilepic : "https://media.licdn.com/dms/image/D4E03AQF2miu0lFPN4A/profile-displayphoto-shrink_800_800/0/1676478695714?e=2147483647&v=beta&t=2mDH3B_ektPudY0YH4E06hyAOJfby_E3FTdMwpU8jJE",
          comment: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
          
        },
    ]

 
 
  return (

    <div className=' flex flex-col gap-4'>
        <div className=' flex gap-6'>
          <Avatar name="Iman Kam" size='40' round={true} src={user?.profilepic}/>
          <input className=' border-2 border-slate-200 md:w-[80%] w-[50%] px-2' placeholder='write a comment' type="text" />
          <button className=' bg-slate-700 px-5 text-white'>Send</button>
        </div>
        <div>
            {posts.map(item=>(
                
                <div className=''>
                    <div className=' flex gap-2 items-center'>
                        <Avatar name="Iman Kam" size='40' round={true} src={item?.profilepic}/>
                        <p className=' flex flex-col first-letter:capitalize '>{item.name} </p>
                    </div>
                    <div className=' flex  gap-10'>
                    <p className=' pb-5 first-letter:capitalize pt-2 flex-[75%] pl-12'>{item.comment}</p>
                    <p className=' flex-[15%] text-gray-500 text-sm' >1 Hour ago</p>
                    </div>
                   
                </div>
            ))}
        </div>

         
    </div>
  )
}

export default Comments