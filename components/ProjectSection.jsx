"use client";
import React, { useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProjectCard from "./ProjectCard";
import propertiesData from "@/constants/propertiesData";

function ProjectSection() {
  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);

  // Duplicate data for seamless scroll
  const duplicatedData = [...propertiesData, ...propertiesData];

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -340, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 340, behavior: "smooth" });
  };

  useEffect(() => {
    return () => clearInterval(autoScrollInterval.current);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-[95%] md:w-[90%] mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-900">
            High-End Residential Properties in Bangalore
          </h2>
          <p className="mt-3 text-gray-600 text-base lg:text-lg">
            Curated homes from trusted developers, crafted for comfort, investment, and lasting value.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-12">

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

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto px-2 py-4"
            style={{ scrollbarWidth: "none" }}
          >
            {duplicatedData?.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
