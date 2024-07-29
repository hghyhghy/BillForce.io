import React from 'react';
import { communities } from '../../constants';
import Popup from './../components/Popup';
import Nav from './../components/Nav';
import Image from 'next/image';
import Community1 from '../components/Community1';
import Servicemenu from '../components/Servicemenu';
import Foot from '../components/Foot';
const Page = () => {
  return (
    <>
      <Nav/>
      <section className="flex items-center justify-center min-h-screen bg-custom-black relative top-[2rem]">
        <div className="flex flex-row items-start gap-8 px-8 py-12">
          <div className="relative flex flex-col items-start w-3/4">
            {communities.map((tag, index) => (
              <div key={index} className="mb-6">
                <h1 className="w-full text-6xl font-semibold text-white">
                  {tag.first}
                </h1>
                <h3 className="w-full text-3xl font-light text-white">
                  {tag.second}
                </h3>
              </div>
            ))}
            <Servicemenu/>
          </div>

          <div className="flex-none">
            <Image
              src="/com.png"
              width={500}
              height={500}
              alt="Description of image"
            />
          </div>
        </div>
      </section>
      <div className=' relative -top-[6rem]'>

        <Community1/>
      </div>

      <div>
        <Foot/>
      </div>
    </>
  );
}

export default Page;
