"use client";

import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Paper-like card container */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:flex items-center gap-8">
          {/* Left section: Top-notch Experts */}
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="font-semibold text-lg">Top-notch Experts</div>
              <div className="font-semibold text-lg">Dedicated Support 24/7</div>
              <div className="font-semibold text-lg">Flexible Pricing</div>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex items-center gap-4">
              <div className="flex items-center -space-x-4">
                {/* Profile pictures */}
                <img
                  src="/114649634.jpg"
                  alt="Profile 1"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                />
                <img
                  src="/1728331836903.jpg"
                  alt="Profile 2"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                />
              </div>
              <div className="text-sm font-medium">Founders of Hubfolio</div>
            </div>
          </div>

          {/* Right section: Text */}
          <div className="flex-1 text-lg font-medium leading-relaxed text-gray-800">
            We help businesses elevate their value through custom software
            development, product design, QA, and consulting services.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
