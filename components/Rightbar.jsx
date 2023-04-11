import React from 'react'
import Avatar from 'react-avatar'

function Rightbar() {

  return (
    <div className=' hidden md:flex flex-[20%] flex-col  w-full sticky top-[88px] mx-2 gap-5 my-5  '>

      <div>
        <p className=' bg-white dark:bg-slate-800 px-5 py-5'>Suggestions</p>
        <div className=' flex flex-col bg-white dark:bg-slate-800 pb-5 gap-5 items-center '>

          <div className='flex justify-between bg-white dark:bg-slate-800 w-full px-5 '>
            <div className='  flex gap-2 items-center'>
              <Avatar name="Iman Kam" size='30' round={true}></Avatar>
              <p>Iman Kamrava</p>
            </div>

            <div className=' flex gap-5'>
              <button className=' bg-slate-600 text-white d px-2'>follow</button>
              <button className=' bg-red-600 text-white px-2'>dismiss</button>
            </div>
          </div>

          <div className='flex justify-between bg-white dark:bg-slate-800 w-full px-5 '>
            <div className='  flex gap-2 items-center'>
              <Avatar name="Iman Kam" size='30' round={true}></Avatar>
              <p>Iman Kamrava</p>
            </div>

            <div className=' flex gap-5'>
              <button className=' bg-slate-600 text-white px-2'>follow</button>
              <button className=' bg-red-600 text-white px-2'>dismiss</button>
            </div>
          </div>
        </div>
      </div>

      <div className=' bg-white dark:bg-slate-800' >
        <p className=' bg-white dark:bg-slate-800 px-5 py-5 '>Latest Activities</p>
        <div className=' flex flex-col  pb-5 justify-evenly '>

          <div className='flex justify-between bg-white dark:bg-slate-800 w-full px-5 items-center '>
            <div className='  flex gap-1 items-center'>
              <Avatar name="Iman Kam" size='30' round={true}></Avatar>
              <p className=' text-sm'>Iman Kamrava</p>
            </div>
            <div >
              <p className=' text-sm'>Changed their cover</p>
            </div>

            <div className=' flex gap-5'>
              <p className=' text-sm'>1 min ago</p>
            </div>
          </div>

          
        </div>
      </div>

      <div>
        <p className=' bg-white dark:bg-slate-800 px-5 py-5'>Online Friends</p>
        <div className=' flex flex-col bg-white dark:bg-slate-800 pb-5 gap-5 '>

          <div className='flex justify-between bg-white  dark:bg-slate-800 w-full px-5 '>
            <div className='  flex gap-2 items-center'>
              <Avatar name="Iman Kam" size='30' round={true}></Avatar>
              <p>Iman Kamrava</p>
            </div>
          </div>

          
        </div>
      </div>

    </div>
      
    
  )
}

export default Rightbar