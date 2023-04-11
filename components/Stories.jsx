
import React, { useContext, useEffect, useState } from 'react'
import plus from "../images/plus.png"
import Image from 'next/image'
import { AuthContext } from '@/context/authContext'

function Stories() {
  const {currentUser} = useContext(AuthContext)
  const [data,setData] = useState("")
  const[user,setuser] = useState(null)
  const stories = [
    {
    id:1,
    name:"Iman Kamrava",
    img:"https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id:2,
    name:"Iman Kamrava",
    img:"https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id:3,
    name:"Iman Kamrava",
    img:"https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id:4,
    name:"Iman Kamrava",
    img:"https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id:5,
    name:"Iman Kamrava",
    img:"https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id:6,
    name:"Iman Kamrava",
    img:"https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id:7,
    name:"Iman Kamrava",
    img:"https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },

]
 
useEffect(()=>{
  setData(stories)
  
  setuser(currentUser)
},[])



  

  return (
    
      <div className=' flex overflow-x-auto gap-3  ' >

         <div id={user?.id} className=' min-w-[20px] md:max-w-[200px] md:h-[240px] flex-none max-w-[100px] max-h-[150px] '>
        
              <img className=' w-full object-cover h-full rounded-lg ' src={user?.profilepic} alt="" />
                <div className='left-[300px] absolute top-[250px] bg-white rounded-full cursor-pointer' >
                {/* <Image src={plus} width={25} height={25}  /> */}
                </div>
              {/* <span className=' text-black bottom-0 left-2 absolute font-bold'>{user?.name}</span> */}
            </div>
            

        {data && data.map(item=>(
            <div id={item.id} className=' min-w-[20px] md:max-w-[200px] md:h-[240px] flex-none max-w-[100px] max-h-[150px]  '>
              <img className=' w-full object-cover h-full rounded-lg ' src={item?.img} alt="" />
              <div className='left-2 absolute bottom-5 ' >
              </div>
              
              {/* <span className=' text-black bottom-0 left-2 absolute font-bold'>{item.name}</span> */}
            </div>
        ))}
     </div>
   
  )
}

export default Stories