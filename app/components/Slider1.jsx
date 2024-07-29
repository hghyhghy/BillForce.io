"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../constants";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 500
  };
  
  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white h-[400px] text-black rounded-xl shadow-md">
            <div className='h-50 bg-custom-black flex justify-center items-center rounded-t-xl'>
              <Image
                src={d.img}
                width={200}
                height={200}
                className="rounded-lg p-2"
                alt="slider"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.review}</p>
              <span>{d.tag}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
