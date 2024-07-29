"use client"
import React from 'react'
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

const Scrolltotop = () => {
    

    const [isvisible, setisvisible] = useState(false)
    const check = () => {

        const top = window.scrollY
        const visible = window.innerHeight
        const height = document.documentElement.scrollHeight

        if (top + visible >= height-50){

            setisvisible(true)
        }
        else{
            setisvisible(false)
        }


    }

    useEffect(() => {
      window.addEventListener('scroll',check)
    
    //   return () => {
    //   window.removeEventListener('scroll',check)
    //   }
    }, [])
    
    const viewtop = () => {

        window.scrollTo({

            top:0,
            left:0,
            behavior:'smooth'
        })
    }
  return (

    <main>
      <div>
        {isvisible && (<button className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition" 

        onClick={viewtop}
        >
            <FaRegArrowAltCircleUp/>
        </button>)}
      </div>
    </main>
  )
}

export default Scrolltotop