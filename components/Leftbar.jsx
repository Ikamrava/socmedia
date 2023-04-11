import React, { useContext, useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import MenuItems from './MenuItems'
import friends from "../images/friends.png"
import image from "../images/image.png"
import market from "../images/market.png"
import watch from "../images/watch.png"
import memory from "../images/memory.png"
import event from "../images/event.png"
import game from "../images/game.png"
import gallery from "../images/gallery.png"
import video from "../images/video.png"
import message from "../images/message.png"
import { AuthContext } from '@/context/authContext'




function Leftbar() {
  const {currentUser} =  useContext(AuthContext)
  const[user,setuser] = useState(null)
  useEffect(()=>{
    setuser(currentUser)
  },[currentUser])
  return (
    <div className='hidden flex-[10%] md:flex flex-col   h-[calc(100vh-70px)] bg-white dark:bg-slate-800 sticky top-[70px]  gap-5 pb-3 overflow-scroll scrollbar-hide'>
      
      <div className=' flex items-center gap-3 pl-4 pt-5 cursor-pointer'>
        <Avatar name="Iman Kam" size='30' round={true} src={user?.profilepic}></Avatar> 
         <span>{user?.name}</span> 
      </div>

      <MenuItems imageUrl={friends} title="Friends"/>
      <MenuItems imageUrl={image} title="Group"/>
      <MenuItems imageUrl={market} title="Market Place"/>
      <MenuItems imageUrl={watch} title="Watch"/>
      <MenuItems imageUrl={memory} title="Memories"/>
      <p className='pl-4 mt-5 pt-5 border-t-2'>Your Shortcuts</p>
      <MenuItems imageUrl={event} title="Events"/>
      <MenuItems imageUrl={game} title="Game"/>
      <MenuItems imageUrl={gallery} title="Gallery"/>
      <MenuItems imageUrl={video} title="Videos"/>
      <MenuItems imageUrl={message} title="Messages"/>
      <p className='pl-4 mt-5 pt-5 border-t-2'>Others</p>
      <MenuItems imageUrl={gallery} title="Fundraiser"/>
      <MenuItems imageUrl={video} title="Tutorials"/>
      <MenuItems imageUrl={message} title="Courses"/>
      
    </div>
  )
}

export default Leftbar