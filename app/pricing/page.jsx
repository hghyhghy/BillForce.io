"use client";
import React from 'react'
import Nav from '../components/Nav';
import Image from 'next/image';
import Dollar from '../pricecard/Dollar';
import { FaDollarSign } from "react-icons/fa";
import Foot from '../components/Foot';
const page = () => {
  return (
    <>
    <main>
       
       <Nav/>

       <div className=' flex items-center justify-center mt-[5rem] flex-col'>
         <Image
         src="/data.svg"
         height={500}
         width={500}
         alt='data'
         />

          <h1 className=' mt-8  text-7xl font-medium text-custom-white'>Select Services and price</h1>
       </div>
        <div className=' flex flex-row  mt-[5rem] px-16 items-center justify-center relative left-[16.5rem] w-3/4'>

          {/* <div className=' flex  flex-row gap-5 w-full'>
           <div className=' flex flex-row gap-5'>
         <App4/>
         <App6/>
            </div> 
         <div className=''>
              <App5/>
          </div>
          </div> */}

      
        </div>
        
        <div className=' relative -top-10  flex  items-center justify-center text-5xl'>
          <h3>Our Best Value for money plans</h3>
        </div>
       
    </main>

    <div className=' mt-10  flex flex-row items-center justify-center gap-5'>
      <Dollar plan={"Monthly"} price={49} member={2} storage={20} integration={"Integration help"}/>
      <Dollar plan={"Quaterly"} price={80} member={4} storage={30} integration={"Integration + help"}/>
      <Dollar plan={"Annually"}price={120} member={6} storage={60} integration={"Integration ++ help"}/>
+
    </div>

    <div className=' mt-8'>
      <Foot/>
    </div>

    </>
  )
}

export default page