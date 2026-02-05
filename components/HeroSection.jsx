"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";

function HeroSection() {
  return (
    <section className="relative w-full h-[45vh] md:h-[35vh] xl:h-[75vh] heroContainer">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Heading */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <h1 className="text-center text-white font-extrabold leading-tight">
          <span className="block text-3xl sm:text-4xl lg:text-6xl drop-shadow-lg">
            Luxury Homes, Straight from
          </span>
          <span className="inline-block mt-2 px-6 py-2 rounded-full text-2xl sm:text-3xl lg:text-4xl bg-[var(--primary)] shadow-lg">
          Trusted Developers
          </span>
        </h1>
      </div>

      {/* Search Box */}
      <div className="absolute left-0 right-0 -bottom-14 sm:-bottom-20 z-20">
        <div className="w-[92%] lg:w-[80%] xl:w-[60%] mx-auto bg-white rounded-2xl shadow-2xl">
          
          {/* Search Row */}
          <div className="flex items-center gap-3 px-4 lg:px-6 py-4">
            <input
              type="text"
              aria-label="Search projects"
              placeholder="Search projects, locations, developers..."
              className="flex-1 text-gray-800 placeholder-gray-400 text-sm lg:text-base 
              border-b-2 border-gray-200 focus:border-[var(--primary)] outline-none py-2"
            />

            <button
              className="hidden md:flex items-center gap-2 px-6 py-2 cursor-pointer 
              bg-[var(--primary)] text-white font-medium rounded-full hover:opacity-90 transition"
            >
              <IoSearch />
              Search
            </button>

            <button
              aria-label="Search"
              className="md:hidden flex items-center justify-center 
              bg-[var(--primary)] text-white w-10 h-10 rounded-full"
            >
              <IoSearch />
            </button>
          </div>

          {/* Filters */}
          <div className="hidden lg:flex flex-wrap gap-3 px-6 pb-5 text-sm">
            {[
              "Apartments",
              "Villas",
              "Plots",
              "Ready To Move",
              "Under Construction",
              "New Launch",
              "Upcoming",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-1.5 rounded-full border border-gray-200 
                text-gray-600 hover:border-[var(--primary)] hover:text-[var(--primary)] 
                transition cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
