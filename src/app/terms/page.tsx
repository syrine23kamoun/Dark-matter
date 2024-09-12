/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";


const Page =() =>{
    return(

<div className={`font-sans bg-black font-lg font-semibold`} >
 <div className="min-h-screen bg-black text-white block box-border ">
    <div className="pl-10 pt-10 mb-8">
        <span className="box-border inline-block overflow-hidden max-w-full ml-0">
        <a href="/"><img className="block  w-[80px] h-[80px]" src="/logo1.png"></img></a>    
        </span>
    </div>

    <div className="container mx-auto leading-10 px-10 lg:px-32">
        <h1 className="font-bold text-xl lg:text-2xl text-center">Imprint and Disclosure</h1>

    
    <div className="text-lg mt-10 leading-8 mx-11 ">
        <section>
            <strong className="font-extrabold">Dark Matter Address:</strong>
            <p>Nabeul, Korba</p>
            
        </section>
        <section className="mt-8" >
           <p><strong className="font-extrabold">E-Mail</strong>: hello@darkmatter.com</p>
           <p><strong className="font-extrabold">Web</strong>: darkmatter.com</p> 
        </section>
        <section className="mt-8"><strong className="font-extrabold">Business purpose/License</strong>: We specialize in providing comprehensive services in automatic data processing and information technology. Our expertise includes consulting in the planning, implementation, and operation of IT systems, as well as the development, operation, and distribution of IT services.</section>
        <section className="mt-8">
            <p><strong className="font-extrabold">Managing Director</strong>: TRABELSI Oussama</p>
         </section>
         <section className="mt-8">
            <p><strong className="font-extrabold">Website Content and Purpose</strong>: : Our website serves as a valuable resource, offering detailed information about our company, our products, and their strategic marketing. Additionally, it provides relevant content aligned with our core business purpose.</p>
         </section>
         <section className="mt-8">
         <p><strong className="font-extrabold">Consumer Dispute Resolution</strong>: For any grievances, consumers have the option to refer to the online dispute resolution platform of the European Union at <a href="http://ec.europa.eu/odr." className="underline">http://ec.europa.eu/odr.</a>  Alternatively, complaints can be addressed directly to the email provided above.</p>
         </section>
        




    </div>
</div>
</div>
<footer className='min-h-full flex gap-8 items-center justify-center bg-black text-white p-20'>
    <Image src="/logo1.png" width={40} height={30} alt="logo"></Image>
    <Link href="/terms" >Terms</Link>
    <Link href="/privacy">Privacy Policy</Link>
</footer>

</div>


)
        
}
export default Page