/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"; 
import Image from "next/image";
import Link from "next/link";


const Page =() =>{
    return(
<>
<body className={`font-sans bg-black`} >
 <div className="min-h-screen bg-black text-white block box-border ">
    <div className="pl-10 pt-10 mb-8">
        <span className="box-border inline-block overflow-hidden max-w-full ml-0">
           <a href="/"> <img className="block  w-[80px] h-[80px]" src="/logo1.png"></img></a> 
        </span>
    </div>
    <div className="container mx-auto leading-10 px-10 lg:px-32">
        <h1 className="font-bold text-xl lg:text-2xl text-center">Privacy Information for Website Users</h1>
        <div className="text-center"><div>by</div><div className="font-bold text-xl">Dark Matter</div></div>
        <article className="text-lg mt-10  ">
            <p className="text-xl">This privacy information is intended to provide transparency regarding the collection, usage, and purpose of personal data on our website, and it outlines your rights concerning the processing of your personal data, in accordance with Articles 13 and 14 of the General Data Protection Regulation(<strong>&ldquo;GDPR&rdquo;</strong>).
            </p>
            <p className="mt-4 text-xl">
            This privacy information pertains to (i) users of the website &ldquo;<a href="/" className="underline">darkmatter.com</a>&rdquo;  and (ii) our esteemed business partners and customers, including their employees.
            </p>
            <section className="mt-4">
              
              <h2 className="font-bold"><span className="font-bold">1. &nbsp; </span> Who is responsible for all processing activities and who is your contact person in case of any questions?</h2>
              <p className="mt-2 text-xl">Data Controller and Contact Person:</p>
              <div className="text-center">
                <div><strong>Dark Matter</strong></div>
                <div><strong>Email</strong>: hello@darkmatter.com</div>
                <div><strong>Address</strong>: Nabuel, Korba</div>
                <div><strong>Website</strong>:  &ldquo;<a href="/" className="underline">darkmatter.com</a>&rdquo;</div>
                
                
              </div>


            </section>
            <section className="mt-4">
              
              <h2 className="font-bold"><span className="font-bold">2. &nbsp; </span> Data Processing Details and Source:</h2>
              <p className="mt-8 text-xl">
                <em className="underline">For Website Users:</em>
            </p>
            <div className="mt-2">
           When utilizing our website, we employ cookies. Further information on this can be found in Section 6.
            </div>
            <div className="mt-2">If you contact us via the online contact form or other provided contact options, we will process the personal data you provide to address and respond to your inquiries. This may include your first name, last name, email address, telephone number, and any other information you provide in your message.</div>
            <p className="mt-8 text-xl">
                <em className="underline">For Business Partners/Customers:</em> 
            </p>
            <div className="mt-2">During the initiation and execution of our (pre-)contractual relationships, we process the personal data provided by you. This may include:</div>
            <div>
                <ul className="italic list-disc block space-y-3 ml-4 ">
                    <li>Name, company or business name;</li>
                    <li>Address;</li>
                    <li>Contact details (phone, e-mail, fax);</li>
                    <li>Company register data;</li>
                    <li>Bank account information;</li>
                    <li>Credit card details;</li>
                    <li>UID number;</li>
                    <li>Names and contact details of relevant personnel</li>
                    <li>Contractual texts and business correspondence</li>
                    

                </ul>

            </div>
        </section>
        <section className="mt-4">
              
              <h2 className="font-bold"><span className="font-bold">3. &nbsp; </span> Purpose and Processing of Personal Data:</h2>
             
              <p className="mt-8 text-xl">
                <em className="underline">For Website Users:</em>
            </p>
            <div className="mt-2">
            We process your personal data for the following purposes:
            </div>
           
                <ol className="list-decimal ml-6 ">
                    <li>Fulfillment of (pre-)contractual obligations: To respond to your inquiries and establish (pre-)contractual relationships with you. Please note that without this data, we may not be able to fulfill our contractual obligations.
                    Compliance with legal obligations: To meet various legal requirements, such as providing information to law enforcement agencies and courts when necessary.</li>
                    <li>Legitimate interests: We process personal data to protect our legitimate interests, ensuring proper communication and website security. You have the right to object to data processing for advertising purposes at any time.</li>
                   

                </ol>
                <p className="mt-8 text-xl">
                <em className="underline">For Business Partners/Customers:</em>
                </p>
                <p>We process your personal data for the following purposes:</p>
                <ol className="list-decimal ml-6 ">
                    <li>Fulfillment of (pre-)contractual obligations: To perform our contractual duties, including protection, due diligence, service provision, claims settlement, and invoicing. Please note that without this data, we may not be able to fulfill our contractual obligations.</li>
                    <li>Compliance with legal obligations: To fulfill various legal obligations, such as proper accounting and providing information to law enforcement agencies and courts.</li>
                    <li>Legitimate interests: We process personal data to protect our legitimate interests, including optimizing our services, sending advertising about our products and services, contacting you for further contractual relationships, and ensuring data availability in legal disputes. You have the right to object to data processing for advertising purposes at any time.</li>

                </ol>

            
        </section>
        <section className="mt-4">
              
              <h2 className="font-bold"><span className="font-bold">4. &nbsp; </span>Data Transfer:</h2>
              <p>We may transfer your personal data to the following authorities and institutions when required by law:</p>
              <p className="mt-8 text-xl">
                <em className="underline">For Website Users:</em>
            </p>
            <div>
                <ul className="italic list-disc block space-y-3 ml-4 ">
                    <li>Service Providers (IT-Provider);</li>
                    <li>Courts and authorities when necessary;</li>
                    <li>Legal representatives or lawyers and third parties assisting in legal services;</li>
                </ul>
            </div>
            <p className="mt-8 text-xl">
                <em className="underline">For Business Partners/Customers:</em>
            </p>
            <div>
                <ul className="italic list-disc block space-y-3 ml-4 ">
                    <li>Service providers (IT providers);</li>
                    <li>Courts and authorities when necessary;</li>
                    <li>Legal representatives or lawyers and third parties, assisting in legal services;</li>
                    <li>Banks;</li>
                    <li>Tax advisers and accountants;</li>
                    <li>Auditors;</li>
                    <li>Insurance companies in the event of an incident
                    </li>
                </ul>
            </div>
            <p>We ensure that your personal data is transferred based on Standard Contractual Clauses or other legal mechanisms, in accordance with Articles 46, 47, or 49 of the GDPR, when recipients are located outside the European Economic Area (EEA) and the EU Commission has not deemed their data protection adequate.</p>

        </section>
        
        <section className="mt-4">
              
              <h2 className="font-bold"><span className="font-bold">5. &nbsp; </span>Duration of Processing and Storage :</h2>
              <p className="mt-8 text-xl">
              We will process your personal data for as long as necessary and will automatically make it anonymous or erase it when the processing is no longer required.
            </p>
           
            <p className="mt-8 text-xl">
            We retain your personal data as necessary for the performance of our services, mandatory record retention, documentation duties, and legal periods of limitation (e.g., according to the Austrian Commercial Code or the Federal Fiscal Code). Some periods of limitation can last up to 30 years in certain cases.
            </p>
        </section>
        <section className="mt-4">
              
              <h2 className="font-bold"><span className="font-bold">6. &nbsp; </span>Data processing in connection with the website :</h2>
              <p className="mt-8 text-xl">
                <em className="underline">Cookies & Analysis Tools :</em>
            </p>
              <p className="mt-8 text-xl">
              Our website uses technically necessary cookies that cannot be deactivated. These cookies temporarily store data on your device to enhance website usability. The cookies are deleted when you close your browser.
            </p>
           
            <p className="mt-8 text-xl">
            We use the web analytics service &ldquo;Fathom Analytics&rdquo; for continuous optimization, both technically and in terms of content. More information about the technical implementation can be found at usefathom.com/blog/anonymization. For further details on data protection at Fathom, visit usefathom.com/data.
            </p>
            

        </section>
        <section className="mt-4">
              
              <h2 className="font-bold"><span className="font-bold">7. &nbsp; </span>Your Rights:</h2>
              <p>You have the following rights regarding your personal data:</p>
              <p className="mt-8 text-xl">
                <em className="underline">Right to information.</em>
            </p>
            
            <p className="mt-8 text-xl">
                <em className="underline">Rectification and erasure of data.</em>
            </p>
              
            <p className="mt-8 text-xl">
                <em className="underline">Restriction of processing.</em>
            </p>
              
            <p className="mt-8 text-xl">
                <em className="underline">Data portability.</em>
            </p>

              <p className="mt-8 text-xl"><em className="underline">Right to object.</em>
            </p>
             
            <p className="mt-8 text-xl"><em className="underline">Right to lodge a complaint with the supervisory authority.</em>
            </p>
            
              <p className="mt-8 text-xl">
              To exercise these rights or if you have any questions regarding your personal data, please contact us at the address provided above
            </p>
           
              <p className="mt-8 text-xl"><em className="underline">Definitions</em>
            </p>
              <p className="mt-8 text-xl">
              For the definitions of the terms used (e.g., &ldquo;personal data&rdquo; or &ldquo;processing&rdquo;), please refer to Article 4 of the GDPR.
            </p>
        </section>


</article>

    </div>
</div>
<footer className='min-h-full flex gap-8 items-center justify-center bg-black text-white p-20'>
    <Image src="/logo1.png" width={40} height={30} alt="logo"></Image>
    <Link href="/terms" >Terms</Link>
    <Link href="/privacy">Privacy Policy</Link>
</footer>
</body>

 </>   
)
        
}
export default Page