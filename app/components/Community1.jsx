import React from 'react'
import Image from 'next/image'
import { connection } from '../../constants'
import { connection1 } from '../../constants'
import Menu from './Menu'

const Community1 = () => {

  return (
    <main>
        <div className='flex flex-col items-center'>
            <h1 className="text-8xl font-medium text-custom-blue flex items-center justify-center">
                Meet Our Communities
            </h1>
            <div className='flex flex-row-reverse items-start mt-10'>
                <div className='flex flex-col max-w-xs'>
                    {connection.map((tag, index) => (
                        <div key={index} className='mb-4'>
                            <h2 className='text-2xl font-semibold'>
                                {tag.first}
                            </h2>
                            <p className='text-lg'>
                                {tag.second}
                            </p>
                        </div>
                    ))}
                </div>
                <Image
                    src="/com1.webp"
                    width={450}
                    height={50}
                    alt='community'
                    className='mr-10'
                />
            </div>
        </div>
        <div className='flex flex-col items-center'>
          
            <div className='flex flex-row items-start mt-10'>
                <div className='flex flex-col max-w-xs'>
                    {connection1.map((tag, index) => (
                        <div key={index} className='mb-4'>
                            <h2 className='text-2xl font-semibold'>
                                {tag.first}
                            </h2>
                            <p className='text-lg'>
                                {tag.second}
                            </p>
                        </div>
                    ))}
                </div>
                <Image
                    src="/com2.webp"
                    width={450}
                    height={50}
                    alt='community'
                    className='mr-10'
                />
            </div>
        </div>
        <div className=' mt-8 flex items-center justify-center'>

        <Menu/>
        </div>
    </main>
  )
}

export default Community1
