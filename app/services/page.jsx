
import React from 'react'
import Nav from '../components/Nav'
import Image from 'next/image'
import Card from '../components/Card'
import { hospital } from '../../constants'
import Servicemenu from '../components/Servicemenu'
import { IoAccessibility } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { IoAnalyticsSharp } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { RiServiceLine } from "react-icons/ri";
import { AiFillClockCircle } from "react-icons/ai";
import { hospital1 } from '../../constants'
import Menu from '../components/Menu'
import Reviews from '../components/Reviews'
import CenterMode from '../components/Slider1'
import Foot from '../components/Foot'
const page = () => {

  return (

    <main>
       <Nav/>
   
   <div className=' flex items-center justify-center gap-5 mt-[8rem]'>

       <div>

          <Image
          src="/hospital1.png"
          width={500}
          height={500}
          />
       </div>
          
          <div>
            {hospital.map((tag) => (

                <div>
                    <ul>
                        <li className='link-animation cursor-pointer  dark:text-slate-300  text-5xl mt-3 font-thin '>{tag.first}</li>


                        <li className='link-animation cursor-pointer  dark:text-slate-300  text-5xl mt-3 font-thin '>{tag.second}</li>

                        <li className='link-animation cursor-pointer  dark:text-slate-300  text-5xl mt-3 font-thin '>{tag.third}</li>

                        <li className='link-animation cursor-pointer  dark:text-slate-300  text-5xl mt-3 font-thin '>{tag.fourth}</li>

                        <li className='link-animation cursor-pointer  dark:text-slate-300  text-5xl mt-3 font-thin '>{tag.fifth}</li>

                        <li className='link-animation cursor-pointer  dark:text-slate-300  text-5xl mt-3 font-thin '>{tag.sixth}</li>

                    </ul>
                </div>
            ))}
            <div className=' mt-8 w-1/2'>

          <Servicemenu/>
            </div>
          </div>


          </div>


<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 relative top-[4rem]'>
    <Card tag={"Healthcare"} Icon={IoAccessibility} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus?"} />
    <Card tag={"Additional Feature"} Icon={IoAdd} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus?"} />
    <Card tag={"Boost Immunity"} Icon={IoAnalyticsSharp} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus?"} />
    <Card tag={"Secure LIc policies"} Icon={GrSecure} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus?"} />
    <Card tag={"Best Nursing"} Icon={RiServiceLine} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus?"} />
    <Card tag={"Quickest Services"} Icon={AiFillClockCircle} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus?"} />
</div>

<div className=' flex flex-col relative top-[8rem]'>

    <div className=' font-bold text-8xl text-slate-300 flex items-center justify-center'>
      <h1>Get Foresight on the go</h1>
    </div>
     
     
</div>

<div className='flex items-center justify-center gap-5 relative top-[12rem]'>
<div>
        <Image
        
        src="/placed.webp"
        height={800}
        width={800}
        className=' px-8 flex flex-row-reverse'
        />
     </div>

 <div>
    {hospital1.map((tag) => (

        <div>
            <h1 className='text-7xl font-medium w-3/4'>
                {tag.first}
            </h1>
            <p className='w-3/4 mt-5'>
                {tag.second}
            </p>
        </div>
    ))}

 </div>
 
</div>

<div className=' relative top-[15rem]'>
<Menu/>
 <h2 className=' font-light text-6xl flex items-center justify-center'>Our Most loved Clients Query</h2>
  <div>
   <Reviews/>
   <CenterMode/>
  </div>
</div>
  
  <div className=' mt-[15rem]'>

  <Foot/>
  </div>
    </main>
  )
}

export default page