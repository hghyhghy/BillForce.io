"use client"
import React from 'react'
import { statistics } from '../../constants'
import { MdBedtime } from 'react-icons/md';
import { SiFastapi } from "react-icons/si";
import { AiOutlineSafety } from "react-icons/ai";
import Card from './Card'
import App2 from '@/employees/App2';
import Section from './Section';
import Foot from './Foot';

 const Hero = () => {
   return (

     <section>
        
      <div className=" flex items-center justify-center relative top-[6rem]">

      <h1 className="text-5xl font-bold text-gray-800 dark:text-slate-100">
        Get <span className="text-5xl font-bold text-blue-600 dark:text-blue-400">
              The Best Job
        </span> Done
        <br />
        With Worlds Leading <br /> Service Provider
      </h1>

      
      </div>
       <div className='relative flex flex-wrap items-center justify-center w-full gap-16 top-[9rem] '>
        {statistics.map((stat,index) => (

          <div key={index}>
            <p className='text-4xl font-bold font-palanquin'>
              {stat.value}
            </p>
            <p className='leading-7 font-montserrat text-slate-gray'>
              {stat.label}
            </p>
          </div>
        ))}
       </div>
      <div className="flex flex-row justify-center item-center relative top-[10rem]">

        <Card tag={"Efficient"} Icon={MdBedtime} text={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus?"} />
        <Card tag={"Fast"}Icon={SiFastapi} text={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus?"} />
        <Card tag={"Secure"}Icon={AiOutlineSafety} text={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus?"} />
      </div>

      <div  className=' mt-[15rem] flex items-center justify-center  flex-col'>

         <div>
          <h1 className=' text-8xl text-custom-white'>
            Reimagine <span className=' text-blue-600'>with</span> Us 
          </h1>
         </div>
        <video 
        width="720"
        height="240"
        controls
        autoPlay
        muted
        loop
        className=' mt-10'
        >
          <source src='/businessvideo.mp4'  type='video/mp4'/>
        </video>
      </div>

      <div className=' mt-10 flex items-center justify-center relative flex-row gap-10'>

         <div className=' w-[25rem]'>
          <h2 className=' text-6xl leading-1'>Enroll today with <span className=' text-red-500'>Billforce</span> to get started  </h2>
         </div>
         <div className=' w-[50rem]'>

        <App2/>
         </div>
      </div>
           
           <div className=' mt-[5rem] flex items-center justify-center gap-10'>
            <Section/>
           </div>
         
         <div className=' mt-5'>
          <Foot/>
         </div>
      </section>
   )
 }

 export default Hero