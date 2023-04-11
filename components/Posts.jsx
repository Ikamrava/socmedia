import React, { useEffect, useState } from 'react'
import Post from './Post'
import Stories from './Stories'

function Posts() {
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

  return (
    <div className=' flex flex-col  items-center gap-5'>
      {data && data.map(item=>(
        <Post post={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Posts