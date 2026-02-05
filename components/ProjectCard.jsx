"use client";
import Link from "next/link";
import React, { useState } from "react";
import FormModel from "./FormModel";

function ProjectCard({ project }) {
  const [projectName, setProjectName] = useState("");

  function handleFormModel(pName) {
    setProjectName(pName);
    document.getElementById("formModel").showModal();
  }

  return (
    <div className="group bg-white w-[320px] flex-shrink-0 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
      
      {/* Image + Status */}
      <Link href={project?.slug || ""}>
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={
              project?.mainImage ||
              "https://protywpv5.live.vithemes.com/wp-content/uploads/2024/08/property-01-780x560.webp"
            }
            alt={project?.projectName || "Project"}
            className="h-[210px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

          {/* Status badge */}
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold 
            rounded-full text-white some-class shadow-md">
            {project?.status || "Pre Launch"}
          </span>
        </div>

        {/* Content */}
        <div className="px-4 pt-4">
          <h3 className="text-lg font-bold text-gray-900 leading-snug">
            {project?.projectName?.substring(0, 32)}
            {project?.projectName?.length > 32 ? "..." : ""}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            By <span className="font-medium text-gray-700">{project?.developer}</span>
          </p>

          <p className="text-sm text-gray-500">{project?.location}</p>

          {/* Specs */}
          <div className="flex justify-between items-center mt-4 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
            <span className="text-xs font-medium text-gray-700 truncate">
              {project?.unitVariants || project?.UnitVariants}
            </span>
            <span className="text-xs font-medium text-gray-700 truncate">
              {project?.sizeRange || project?.area}
            </span>
          </div>
        </div>
      </Link>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-4">
        <div>
          <p className="text-xs text-gray-500">Starting from</p>
          <p className="text-lg font-bold text-gray-800">
            ₹ {project?.price}
          </p>
        </div>

        <button
          onClick={() => handleFormModel(project?.projectName)}
          className="some-class text-white text-sm font-semibold 
          px-5 py-2 rounded-full hover:opacity-90 transition cursor-pointer"
        >
          Enquiry
        </button>
      </div>

      <FormModel projectName={projectName} />
    </div>
  );
}

export default ProjectCard;
