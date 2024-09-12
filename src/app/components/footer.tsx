import React from 'react'
import Link from 'next/link'
import Image from'next/image'
const Footer : React.FC =() =>{
return(
<footer className='min-h-full flex gap-8 items-center justify-center bg-black text-white p-20'>
    <Image src="/logo1.png" width={40} height={30} alt="logo"></Image>
    <Link href="/terms" >Imprint</Link>
    <Link href="/privacy">Privacy Policy</Link>
</footer>
)
    
}
export default Footer