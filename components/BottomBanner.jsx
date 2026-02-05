"use client";
import React from "react";

function BottomBanner() {
  return (
    <section className="w-[95%] md:w-[90%] mx-auto py-14">
      <div className="relative bottomBannerContainer min-h-[45vh] md:min-h-[35vh] lg:min-h-[40vh] xl:min-h-[50vh] rounded-3xl overflow-hidden flex items-center justify-center">
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-4 text-center text-white">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Planning to Sell or Rent Your Property?
          </h3>

          <p className="mt-4 text-base md:text-lg text-gray-300">
            Connect with serious buyers and tenants through our trusted real
            estate network and high-visibility marketing channels.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <button className="px-8 py-3 text-sm md:text-base font-semibold rounded-md bg-white text-black hover:bg-gray-200 transition">
              Get a Free Property Appraisal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomBanner;
