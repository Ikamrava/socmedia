import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

function Main() {
  return (
    <div className='flex-[50%]  flex flex-col md:mx-5 px-5 md:my-5 mx-3 py-5 gap-5   '>
      <div><Stories/> </div>
      <div >
        <Posts/> 
      </div>
       
      <Posts/> 
      <Posts/> 
      
      </div>
  )
}

export default Main