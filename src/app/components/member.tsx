import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface Props{
   source:string
   name:string 
   socialId:string 
   link:string 

}
const Member : React.FC<Props>=({source,name,socialId,link})=>{
return(
     <div>
   <Image src={source} alt={name} width={1366} height={1555}  />
   <div className='text-2xl xl:text-3xl' >{name}</div>
   <div className='text-xl'>
   <a href={link} target="_blank" >{socialId}</a>
   </div>
 </div>
 )

}
export default Member