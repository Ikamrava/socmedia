import Image from 'next/image'


function MenuItems({imageUrl,title}) {
  return (
    <div className=' flex items-center gap-3 pl-4 cursor-pointer '>
    <Image src={imageUrl} width={25} height={25} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default MenuItems