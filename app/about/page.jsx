
import React from 'react'
import Image from 'next/image'
import Nav from '../components/Nav'
import { about } from '../../constants'
import Button1 from '../components/Button1'
import { about1 } from '../../constants'
import Aboutmenu from '../components/Aboutmenu'
import { about2 } from '../../constants'
import Popup from '../components/Popup'
import Servicemenu from '../components/Servicemenu'
import Foot from '../components/Foot'

const page = () => {
  return (
    <main>

        <Nav/>

        <div className=' flex items-center justify-center gap-16 mt-[6rem]'>

            <div>
               <Image
               
               src="/about.svg"
               width={800}
               height={800}
               alt='About'
               className=' ml-5'
               />
            </div>

            <div>
                {about.map((tag) => (

                   <div className='flex flex-col relative left=[3rem]'>

                        <h1 className=' font-semibold text-7xl'>
                           {tag.first}                 
                        </h1>
                        <p className=' w-3/4 mt-3 font-serif text-1xl'>
                            {tag.second}
                        </p>

                   </div>

                   

                ))}
            
            <div className=' mt-3'>

              <Button1/>
            </div>

            
                
                
            </div>

        </div>

              <div className='relative top-[8rem] px-5'>
                    {about1.map((tag) => (
                  
                  <div>
                     <h1 className=' font-semibold text-5xl'>
                           {tag.first}                 
                        </h1>
                        <p className=' w-1/3 mt-3 font-serif text-2xl'>
                            {tag.second}
                        </p>
                  </div>

                 ))}

                 <div className=' mt-[5rem]'>

                 <Aboutmenu/>
                 </div>

                 <div className=' flex items-center justify-center gap-5 flex-row-reverse mt-5'>

                    <div className=' w-1/3'>
                        {about2.map((tag) => (

                            <h1 className=' font-medium text-4xl'>
                                {tag.first}
                            </h1>
                        ))}

                        <div className=' mt-5'>

                        <Servicemenu/>
                        </div>
                    </div>

                    <div>
                        <Image
                        src="/women.jpg"
                        width={400}
                        height={400}
                        alt='women'
                        className=' relative'
                        />
                        
                    </div>
                 </div>
                    </div>

                 <div className=' mt-[9rem]'>
                    <Foot/>
                 </div>

       
    </main>
  )
}

export default page