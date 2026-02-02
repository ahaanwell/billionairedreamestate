"use client"
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";

function HeroSection() {
  return (
    <div className="heroContainer w-full h-[40vh] sm:h-[40vh] md:h-[30vh] lg:h-[30vh] xl:h-[70vh] relative">
      <div className="flex justify-center h-full w-full items-center">
        <h3 className="text-center mt-5 lg:mt-0 text-shadow text-3xl lg:text-5xl font-extrabold text-white">
          ACQUIRE HOMES DIRECTLY <br />
          <span className="text-3xl py-1 px-5 rounded lg:bg-[var(--primary)]">
            FROM DEVELOPERS
          </span>
        </h3>
      </div>

      <div className="w-[100%] absolute bottom-[-33px] sm:bottom-[-60px] md:bottom-[-30px] lg:bottom-[-65px]">
        <div className="lg:w-[80%] xl:w-[58%] w-[90%] m-auto bg-white shadow-md rounded-md z-50">
          <div >
            <div className="relative">
              <div className="flex justify-center gap-2 px-3 lg:px-5 lg:pt-5 py-4 lg:py-0">
                <input
                  type="text"
                  aria-label="Search projects"
                  className="w-full p-2 lg:border-b-3 text-black border-thirdry rounded-sm outline-none"
                  placeholder="Search Dream..."
                />
                <button
                  className="hidden md:block some-class px-6 text-white rounded-4xl cursor-pointer"
                  
                >
                  Search
                </button>
                <button
                  className="block md:hidden some-class px-6 text-white rounded-4xl cursor-pointer"
                  aria-label="Search"
                >
                  <IoSearch />
                </button>
              </div>

            </div>
            <div className="lg:flex justify-between mt-4 text-sm text-gray-600 cursor-pointer hidden px-5 pb-5">
              <span className="border py-1 px-3 rounded-full">Apartments</span>
              <span className="border py-1 px-3 rounded-full">Villas</span>
              <span className="border py-1 px-3 rounded-full">Plots</span>
              <span className="border py-1 px-3 rounded-full">Ready To Move</span>
              <span className="border py-1 px-3 rounded-full">Under Construction</span>
              <span className="border py-1 px-3 rounded-full">New Launch</span>
              <span className="border py-1 px-3 rounded-full">Upcoming</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
