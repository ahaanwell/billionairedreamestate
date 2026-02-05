"use client";
import React, { useRef } from "react";
import CityCard from "./CityCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CitySection() {
  const scrollRef = useRef(null);

  const cityList = [
    { cityName: "Bangalore", image: "/bangalore.jpg" },
    { cityName: "Hyderabad", image: "/hyderabad.jpg" },
    { cityName: "Mumbai", image: "/mumbai.jpg" },
    { cityName: "Delhi", image: "/delhi.jpg" },
    { cityName: "Noida", image: "/noida.jpg" },
    { cityName: "Gurugram", image: "/gurugram.jpg" },
  ];

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -340, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 340, behavior: "smooth" });
  };

  return (
    <section className="w-[95%] md:w-[90%] mx-auto py-16">
      
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Popular Choices
        </h2>
        <p className="mt-2 text-gray-600 text-base lg:text-lg">
          Where your dream homes take shape!
        </p>
      </div>

      {/* Slider */}
      <div className="relative mt-10">
        
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex items-center justify-center
          absolute left-[-20px] top-1/2 -translate-y-1/2 z-10
          w-11 h-11 rounded-full bg-white shadow-lg
          text-xl text-gray-700 hover:bg-[var(--primary)]
          hover:text-white transition"
        >
          <IoIosArrowBack />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="hidden md:flex items-center justify-center
          absolute right-[-20px] top-1/2 -translate-y-1/2 z-10
          w-11 h-11 rounded-full bg-white shadow-lg
          text-xl text-gray-700 hover:bg-[var(--primary)]
          hover:text-white transition"
        >
          <IoIosArrowForward />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-2 py-4"
          style={{ scrollbarWidth: "none" }}
        >
          {cityList.map((city, index) => (
            <CityCard key={index} city={city} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CitySection;
