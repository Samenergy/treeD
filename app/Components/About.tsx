"use client";
import { FaChevronRight } from "react-icons/fa6";

import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-3 gap-4 text-center border-b border-gray-300 pb-5 text-black">
              <div className="font-semibold text-lg">Top-notch Experts</div>
              <div className="font-semibold text-lg">Dedicated Support 24/7</div>
              <div className="font-semibold text-lg">Flexible Pricing</div>
            </div>
        <div className="bg-gray-200 p-8 flex items-center">
          <div className="flex-1 space-y-4">
            
            <div className="flex flex-col items-center gap-4 -ml-52">
              <div className="flex items-center -space-x-4">
                <img
                  src="/114649634.jpg"
                  alt="Profile 1"
                  className="w-40 h-auto rounded-full border-4 border-white shadow-md"
                />
                <img
                  src="/1728331836903.png"
                  alt="Profile 2"
                  className="w-40 h-auto rounded-full border-4 border-white shadow-md"
                />
              </div>
              <div className="text-lg font-normal -ml-40 text-black">Founders of <br /> treeD</div>
            </div>
          </div>

          
        <div>
        <div className="flex-1 text-3xl font-medium leading-relaxed text-black -ml-28 ">
            We help businesses elevate their value <br /> through custom software <br />
            development, product design, QA, and <br /> consulting services.
          </div>
          <button className="bg-[#145b2f] mt-5 text-white text-sm px-5 py-2 rounded-full flex items-center -ml-28 ">
          More About Us <FaChevronRight />

          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
