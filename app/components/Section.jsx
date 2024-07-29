"use client";
import React from 'react'
import { myhero } from '@/constants';
import Image from 'next/image';


const Section = () => {
  return (
    <main>

        <div className=' flex flex-row'>
             <div>
                <Image
                src="/enterprise.svg"
                height={540}
                width={800}
                alt='enterprise'
                />
             </div>

             <div>
                {myhero.map((stat) => (

                    <div className=' flex flex-col'>
                        <h1 className=' text-3xl font-medium w-3/4'>
                            {stat.first}
                        </h1>
                        <div className='flex flex-row items-center gap-5 relative left-[4rem] w-1/2 top-5'>
                            <h4 className='mr-4 relative top-[1.5rem]'> {/* Add margin-right to space the elements */ }
                                {stat.second}
                            </h4>
                            <h1 className=' font-medium text-2xl relative'>{stat.third}</h1>
                            <p className=' relative -left-[1.2rem] top-2'>
                                {stat.fourth}
                            </p>
                         
                        </div>

                        

                    </div>
                ))}
                    <button className='mt-12 bg-red-600 rounded-lg p-3 relative left-[6rem] hover:scale-95 transition-transform duration-300 ease-in-out'>
                                        Read More
                    </button>

             </div>
            
            
             
        </div>
    </main>
  )
}

export default Section