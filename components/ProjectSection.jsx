"use client"
import React, { useRef, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProjectCard from "./ProjectCard";
import propertiesData from "@/constants/propertiesData";

function ProjectSection() {
  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);




  // Duplicate data to create an infinite loop effect
  const duplicatedData = [...propertiesData, ...propertiesData];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const startAutoScroll = () => {
    autoScrollInterval.current = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          // Reset scroll to start smoothly when it reaches the middle
          container.scrollTo({ left: 0, behavior: "instant" });
        } else {
          container.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 1000);
  };

  useEffect(() => {

    // startAutoScroll();

    return () => clearInterval(autoScrollInterval.current);
  }, []);

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval.current);
  };

  const resumeAutoScroll = () => {
    startAutoScroll();
  };

  return (
    <div>
      <div className="md:w-[90%] w-[95%] m-auto pt-8 pb-16">
        <div className="flex flex-col justify-center">
          <h5 className="text-center font-bold text-2xl lg:text-3xl text-black">
          Premium Real Estate Properties in Bangalore
          </h5>
          <p className="text-center text-lg text-gray-700 mt-2">
          Explore prime properties and picks for you!
          </p>
        </div>
        <div className="mt-5 relative">
          {/* Left Arrow */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button
              className="bg-white text-black shadow-lg rounded-full p-2 text-2xl font-bold cursor-pointer"
              onClick={scrollLeft}
            >
              <IoIosArrowBack />
            </button>
          </div>

          {/* Right Arrow */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button
              className="bg-white text-black shadow-lg rounded-full p-2 text-2xl font-bold cursor-pointer"
              onClick={scrollRight}
            >
              <IoIosArrowForward />
            </button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 py-4 px-2"
            // onMouseEnter={stopAutoScroll}
            // onMouseLeave={resumeAutoScroll}
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              whiteSpace: "nowrap",
            }}
          >
            {duplicatedData?.map((project, i) => (
            //   <div key={i} className="flex-shrink-0 w-[300px]">
                <ProjectCard key={i} project={project} />
            //   </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
