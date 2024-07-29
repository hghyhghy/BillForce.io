"use client"; // If needed for React experimental features

import React from 'react';
import { Heading } from '../../constants';
import Link from 'next/link';
import App3 from '../sign/App3';
const Nav = () => {
  return (
    <header>
      <nav className="flex items-center justify-center">
        <div className="relative flex items-center justify-center left-[16rem] top-4 text-4xl">
          <Link href="/">
            <h1 className="font-medium text-blue-600 relative right-[5rem]">
              BillForce <span className="font-medium text-red-500">.io</span>
            </h1>
          </Link>
        </div>
        <ul className="flex items-center justify-center flex-1 gap-16 relative mt-9">
          {Heading.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="font-medium text-black link-animation dark:text-white">
                {item.label}
              </Link>
            </li>
          ))}
          <App3/>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
