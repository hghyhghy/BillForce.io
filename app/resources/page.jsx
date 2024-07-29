"use client";
import React from 'react';
import Nav from '../components/Nav';
import Image from 'next/image';
import { resource } from '@/constants';
import Button1 from '../components/Button1';
import App from '@/Custom/App';
import { resource1 } from '@/constants';
import SimpleSlider from '../components/Slider2';
import Mystat from '../components/Mystat';
import Foot from '../components/Foot';
const page = () => {
  return (
    <main>
      <Nav />

      <div className='flex flex-row-reverse top-[8rem] relative gap-[4rem] h-[30rem] p-3 justify-between'>
        <div className='mt-5'>
          <Image
            src="/about.svg"
            width={500}
            height={500}
            alt=''
          />
        </div>

        <div className='mt-5'>
          {resource.map((stat) => (
            <div key={stat.first}>
              <h5 className="text-1xl text-slate-400 font-medium">
                {stat.first}
              </h5>
              <h1 className='text-5xl font-medium text-white mt-5'>
                {stat.second}
              </h1>
              <p className='mt-5'>
                {stat.third}
              </p>
            </div>
          ))}
          <div className='mt-5 flex flex-row gap-4'>
            <Button1 />
            <App />
          </div>
        </div>
      </div>

      <div className='flex flex-col mt-[5rem]'>
        <div className='flex items-center justify-center'>
          <h1 className='text-7xl font-extrabold text-custom-white'>Our best Partners Worldwide</h1>
        </div>
      </div>

      <div className='mt-[6rem] flex flex-wrap justify-center gap-4'>
        {resource1.map((tag) => (
          <div key={tag.first} className='flex items-center justify-center'>
            <Image
              src={tag.first}
              height={200}
              width={200}
              alt='partners'
              className='cursor-pointer transform transition-transform duration-300 hover:scale-95'

            />
          </div>
        ))}
      </div>

      <div className=' mt-[7rem]'>
        <SimpleSlider/>
      </div>

      <div className=' mt-10 w-3/4  flex items-center justify-center relative left-[15rem]'>
      <Mystat/>
        
      </div>
      <div className=' mt-2'>
        <Foot/>
      </div>
    </main>
  );
}

export default page;
