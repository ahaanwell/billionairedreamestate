"use client";
import React from "react";

function MiddleBannerSection() {
  return (
    <section className="relative min-h-[100vh] bg-cover bg-center bg-fixed headingWithBackground flex items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 text-white">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Market Your Property with Complete Confidence
          </h1>

          {/* Description */}
          <p className="max-w-3xl text-base md:text-lg text-gray-200">
            Get a no-obligation property valuation and connect with genuine buyers
            through our trusted real estate marketing expertise—both digital and
            on-ground.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 mt-12">
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold">11+</p>
              <p className="mt-2 text-sm md:text-base text-gray-300">
                Years of Experience
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold">4,130+</p>
              <p className="mt-2 text-sm md:text-base text-gray-300">
                Properties Sold
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold">98%</p>
              <p className="mt-2 text-sm md:text-base text-gray-300">
                Client Satisfaction
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold">1,790+</p>
              <p className="mt-2 text-sm md:text-base text-gray-300">
                5-Star Reviews
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button className="px-8 py-3 text-sm md:text-base font-semibold rounded-md bg-white text-black hover:bg-gray-200 transition">
              Get Free Property Valuation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiddleBannerSection;
