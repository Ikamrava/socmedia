import React, { useState } from 'react'
import Avatar from 'react-avatar'
import {BsThreeDots} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {BiCommentDots} from "react-icons/bi"
import {BsShare} from "react-icons/bs"
import {AiFillHeart} from "react-icons/ai"
import Comments from './Comments'
import Link from 'next/link'




function Post({post}) {
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
    const liked = false
    const [showComments,setShowComments] = useState(false)
    function commentsHandler (){
        setShowComments(!showComments)
    }
  return (
    <div className='bg-white dark:bg-slate-800 rounded-xl p-5'>
        
        <div className=' flex justify-between mb-5'>
            <Link href="./profile">
                <div className=' flex gap-4'>
                    <Avatar name="Iman Kam" size='40' round={true} src={post?.profilepic}/>
                    <p className=' flex flex-col'>{post.name} <span className=' text-sm'>a few min ago</span></p>
                </div>
            </Link>
            <div>
                <BsThreeDots/>
            </div>
        </div>

       
        <p className=' text-sm first-letter:capitalize'>{post.description}</p>

        <img className=' w-full my-5' src={post.img} alt="" />
        <div className=' flex gap-4'>
            <div className=' flex gap-2 items-center cursor-pointer'>
                {!liked ? <AiOutlineHeart size={20}/> : <AiFillHeart className=' text-red-600' size={20}/> }
                
                <span>12 Likes</span>
            </div>

            <div className=' flex gap-2 items-center cursor-pointer ' onClick={commentsHandler}>
                <BiCommentDots size={20}></BiCommentDots>
                <span>Comments</span>
            </div>

            <div className=' flex gap-2 items-center cursor-pointer'>
                <BsShare size={20}></BsShare>
                <span>Share</span>
            </div>



        </div>
        <div className=' pt-5'>
          {showComments && (<Comments/>)}
        </div>

    
        
  
        
    </div>
  )
}

export default Post
