import React, { ReactNode } from 'react'
interface Props{
    by:string
    children : ReactNode
}
const Review :React.FC<Props> =({children , by}) =>(
    <div className='flex flex-col text-center items-center justify-center px-5 md:px-10 lg:px-20'>
        <div className='text-xl md:text-2xl leading-10 lg:leading-[3rem] tracking-tighter'>
             &ldquo;{children}&rdquo; 
        </div>
        <div className='mt-6'>
            &mdash; {by}
        </div>
        
    </div>
)
export default  Review