
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { tech } from "@/constants";
import { tech1 } from "@/constants";
import { tech2 } from "@/constants";
import { tech3 } from "@/constants";
import { tech4 } from "@/constants";
import { tech5 } from "@/constants";
import Servicemenu from "./Servicemenu";

import Image from "next/image";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <div className="w-[75rem]  py-4 mx-auto mt-10">
      <Slider {...settings}>
        <div className="flex items-center justify-center h-64">
            {tech.map((tag) => (
             <div className=" flex flex-row gap-5">

                <Image
                src={tag.first}
                height={600}
                width={600}
                />
             
             <div className=" flex flex-col gap-5">

               <h1 className=" text-6xl font-medium font-mono mt-[6rem]">
                Cloud Computing
               </h1>
               <p className=" text-custom-white font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nemo quos possimus minus eius odit perferendis eos magni illo voluptas.
               </p>
               <div className=" w-1/2">

                <Servicemenu/>
               </div>
             </div>
             </div>   
            ))}
        </div>
        <div className="flex items-center justify-center h-64">
        {tech1.map((tag) => (
            <div className=" flex flex-row gap-5">

                <Image
                src={tag.first}
                height={600}
                width={600}
                />
                <div className=" flex flex-col gap-5">

<h1 className=" text-6xl font-medium font-mono mt-[6rem]">
Cybersecurity
</h1>
<p className=" text-custom-white font-semibold">
 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nemo quos possimus minus eius odit perferendis eos magni illo voluptas.
</p>
<div className=" w-1/2">

 <Servicemenu/>
</div>
</div>
                
                </div>
            ))}
        </div>
        <div className="flex items-center justify-center h-64">
        {tech2.map((tag) => (

            <div className=" flex flex-row gap-5">

                <Image
                src={tag.first}
                height={600}
                width={600}
                />
                <div className=" flex flex-col gap-5">

<h1 className=" text-6xl font-medium font-mono mt-[6rem]">
Data and Artificial Intelligence
</h1>
<p className=" text-custom-white font-semibold">
 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nemo quos possimus minus eius odit perferendis eos magni illo voluptas.
</p>
<div className=" w-1/2">

 <Servicemenu/>
</div>
</div>
                </div>
            ))}
        </div>
         <div className="flex items-center justify-center h-64">
         {tech3.map((tag) => (
            <div className=" flex flex-row gap-5">

                <Image
                src={tag.first}
                height={600}
                width={600}
                />
                <div className=" flex flex-col gap-5">

<h1 className=" text-6xl font-medium font-mono mt-[6rem]">
Learning
</h1>
<p className=" text-custom-white font-semibold">
 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nemo quos possimus minus eius odit perferendis eos magni illo voluptas.
</p>
<div className=" w-1/2">

 <Servicemenu/>
</div>
</div>
                </div>
            ))}
        </div>
        <div className="flex items-center justify-center h-64">
        {tech4.map((tag) => (
            <div className=" flex flex-row gap-5">

                <Image
                src={tag.first}
                height={600}
                width={600}
                />
                <div className=" flex flex-col gap-5">

<h1 className=" text-6xl font-medium font-mono mt-[6rem]">
Strategy
</h1>
<p className=" text-custom-white font-semibold">
 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nemo quos possimus minus eius odit perferendis eos magni illo voluptas.
</p>
<div className=" w-1/2">

 <Servicemenu/>
</div>
</div>
                </div>
            ))}
        </div>
        <div className="flex items-center justify-center h-64">
        {tech5.map((tag) => (
            <div className=" flex flex-row gap-5">

                <Image
                src={tag.first}
                height={600}
                width={600}
                />
                <div className=" flex flex-col gap-5">

<h1 className=" text-6xl font-medium font-mono mt-[6rem]">
Sustainability
</h1>
<p className=" text-custom-white font-semibold">
 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nemo quos possimus minus eius odit perferendis eos magni illo voluptas.
</p>
<div className=" w-1/2">

 <Servicemenu/>
</div>
</div>
                </div>
            ))}
        </div> 
      </Slider>
    </div>
  );
}

export default SimpleSlider;
