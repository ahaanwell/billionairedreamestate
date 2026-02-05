import React from "react";
import { GiSpookyHouse, GiVillage } from "react-icons/gi";
import { SiTalenthouse } from "react-icons/si";
import { PiBuildingApartmentBold, PiFarm } from "react-icons/pi";
import { AiOutlineBoxPlot } from "react-icons/ai";

function PropertyTypeSection() {
  const propertyTypes = [
    { name: "Penthouse", icon: <GiSpookyHouse /> },
    { name: "Townhouse", icon: <SiTalenthouse /> },
    { name: "Villa", icon: <GiVillage /> },
    { name: "Apartment", icon: <GiSpookyHouse /> },
    { name: "Homestay", icon: <PiBuildingApartmentBold /> },
    { name: "Land / Plots", icon: <AiOutlineBoxPlot /> },
    { name: "Farm", icon: <PiFarm /> },
  ];

  return (
    <section className="w-[95%] md:w-[90%] mx-auto mt-24">
      
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Property Type
        </h2>
        <p className="mt-2 text-gray-600 text-base lg:text-lg">
          Thousands of luxury home enthusiasts just like you visit our website.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10">
        <div
          className="flex gap-5 overflow-x-auto px-2 pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {propertyTypes.map((item, index) => (
            <div
              key={index}
              className="group min-w-[140px] lg:min-w-[170px] 
              bg-white rounded-2xl border border-gray-200 
              flex flex-col items-center gap-3 p-5 cursor-pointer
              shadow-sm hover:shadow-xl hover:-translate-y-1
              transition-all duration-300"
            >
              <div
                className="w-14 h-14 flex items-center justify-center 
                rounded-full border-2 border-[var(--primary)] 
                text-[var(--primary)] text-2xl
                group-hover:bg-[var(--primary)] group-hover:text-white
                transition"
              >
                {item.icon}
              </div>

              <span className="font-semibold text-gray-800 group-hover:text-[var(--primary)] transition">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyTypeSection;
