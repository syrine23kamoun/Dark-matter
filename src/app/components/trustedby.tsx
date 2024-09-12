import React from'react'
import ClientLogos from './client-logos'
import Testimonials from './testimonials'
import s from '../trustedby.module.css'
const TrustedBy:React.FC=() => {
  return(
    <section className= {`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${s.bg}`}>
<div className='flex-1'></div>   
<div className='flex flex-col justify-center items-center'>
    <h3 className='text-xl mb-10 font-bold text-center'>
        <span className='whitespace-nowrap'>Our partners </span>
        
       
    </h3>
   <ClientLogos></ClientLogos>
 </div>
<div className='flex flex-col justify-center items-center'>
<div className='container mx-auto lg:max-w-[70%] lg:px-10'>
    <h3 className='text-3xl lg:text-4xl tracking-tighter text-center px-10 !leading-[3.5rem]'>We prioritize clear communication and transparent development.</h3>
</div>
</div>
<Testimonials />
<div className='flex-1 bg-black'></div>
  </section>
  )
}
export default TrustedBy