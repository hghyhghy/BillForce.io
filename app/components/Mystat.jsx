"use client";
import React from 'react';
import { statistics1, writting } from '@/constants';

const Mystat = () => {
  return (
    <main className="p-4 max-w-screen-lg mx-auto relative -left-[12rem]">
      <div className='flex flex-col items-start justify-start p-2'>
        {writting.map((text, index) => (
          <div key={index} className=' w-[50rem]'>
            <h1 className='text-6xl'>{text.first}</h1>
            <p className='mt-3 text-xl'>{text.second}</p>
            <p className='mt-2 text-xl'>{text.third}</p>
          </div>
        ))}
      </div>

      <div className='relative flex flex-row items-center justify-start w-full gap-16 mt-10'>
        {statistics1.map((stat, index) => (
          <div key={index} className='text-center'>
            <p className='text-6xl font-bold font-palanquin'>
              {stat.value}
            </p>
            <p className='leading-7 font-montserrat text-slate-gray'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Mystat;
