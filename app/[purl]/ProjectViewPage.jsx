"use client";
import React, { useState, useEffect } from "react";
import propertiesData from "../../constants/propertiesData";
import FormModel from "@/components/FormModel";
import ImageModel from "@/components/ImageModel";
import LeadForm from "@/components/LeadForm";
import ProjectMiniNavbar from "@/components/ProjectMiniNavbar";
import { FaLayerGroup, FaDownload, FaArrowAltCircleDown } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { TbBuildingCommunity } from "react-icons/tb";
import Amenities from "@/components/Amenities";

// Placeholder Components (Replace with your actual components)
// const Amenities = () => <div>Amenities Component</div>;
// const LeadForm = ({ projectName }) => <LeadForm projectName={projectName} />;
const Spinner = () => <div>Loading...</div>;

function ProjectViewPage({ purl }) {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currId, setCurrId] = useState(null);
  const [currViewImage, setCurrViewImage] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formHeading, setFormHeading] = useState("Enquire Now For More Details");

  // Load project based on purl
  useEffect(() => {
    const foundProject = propertiesData.find((p) => p.slug === purl);
    if (foundProject) {
      setProject(foundProject);
      setIsLoading(false);
    } else {
      setError("Project not found");
      setIsLoading(false);
    }
  }, [purl]);

  // FAQ toggle
  const handleFaq = (id) => {
    setCurrId(currId === id ? null : id);
  };

  // Open image modal
  const handleImageClick = (item) => {
    setCurrViewImage(item);
  };

  // Open form modal
  const handleFormModel = (headingText = "Enquire Now For More Details") => {
    setFormHeading(headingText);
    setIsFormOpen(true);
  };

  // Section components
  const HtmlSection = ({ html }) => (
    <div className="px-5 pb-5 text-gray-700" dangerouslySetInnerHTML={{ __html: html }} />
  );

  const renderOverviewSection = () => (
    <section className="bg-white xl:rounded-md shadow-md mt-4">
      <div className="border-b-2 border-gray-300 py-3 text-center">
        <p className="text-xl font-semibold text-gray-700">Overview</p>
      </div>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {[
          { label: "Project Area", value: project?.sizeRange },
          { label: "Project Type", value: project?.projectType },
          { label: "Project Status", value: project?.status },
          { label: "Possession on", value: project?.possessionTime },
          { label: "Unit Variants", value: project?.unitVariants },
          { label: "Total Land Area", value: project?.totalLandArea },
          { label: "No. Of Units", value: project?.noOfUnits },
          { label: "No. Of Floors", value: project?.noOfFloors },
          { label: "Towers and Blocks", value: project?.towersAndBlocks },
        ].map((item, index) => (
          <div
            key={index}
            className="border flex flex-col gap-2 justify-center items-center border-gray-400 p-3 rounded shadow"
          >
            <p className="text-md text-gray-600">{item.label}</p>
            <p className="font-medium text-black">{item.value || "-"}</p>
          </div>
        ))}
      </div>
      <HtmlSection html={project?.overviewContent || ""} />
    </section>
  );

  const renderAmenitiesSection = () => (
    <section className="bg-white xl:rounded-md shadow-md mt-4">
      <div className="border-b-2 border-gray-300 py-3 text-center">
        <p className="text-xl font-semibold text-gray-700">Amenities</p>
      </div>
      <div className="p-5 w-full flex justify-center items-center">
        <Amenities />
      </div>
      <HtmlSection html={project?.amenitiesContent || ""} />
    </section>
  );

  const renderPaymentPlanSection = () => (
    <>
      {/* Desktop */}
      <section className="hidden md:block bg-white xl:rounded-md shadow-md mt-4" id="paymentsplan">
        <div className="border-b-2 border-gray-300 py-3 text-center">
          <p className="text-xl font-semibold text-gray-700">Payments Plan</p>
        </div>
        <div className="lg:p-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-black border-b">
                <th className="py-3 px-4 text-left text-white">Unit Type</th>
                <th className="py-3 px-4 text-center text-white">Size</th>
                <th className="py-3 px-4 text-right text-white">Price</th>
              </tr>
            </thead>
            <tbody>
              {project?.pricePlan?.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}>
                  <td className="py-3 px-4 text-left text-gray-700">{item?.unitType}</td>
                  <td className="py-3 px-4 text-center text-gray-700">{item?.area}</td>
                  <td className="py-3 px-4 text-right text-gray-700 flex justify-end gap-1 items-center">
                    {item.price}
                    <button
                      onClick={() => handleFormModel("Download Price Cost")}
                      className="some-class py-1 px-2 text-white flex cursor-pointer justify-center items-center gap-2 text-xs"
                    >
                      Enquire Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <HtmlSection html={project?.pricePlanContent || ""} />
      </section>

      {/* Mobile */}
      <section className="block md:hidden bg-white xl:rounded-md shadow-md mt-4" id="paymentsplan">
        <div className="border-b-2 border-gray-300 py-3 text-center">
          <p className="text-xl font-semibold text-gray-700">Payments Plan</p>
        </div>
        <div className="p-4 grid grid-cols-1 gap-2">
          {project?.pricePlan?.map((item, i) => (
            <div
              key={i}
              className="bg-[#eaeff1] border border-gray-600 flex flex-col p-3 gap-2 justify-between items-center"
            >
              <p className="text-2xl font-semibold text-black">{item?.unitType}</p>
              <p className="text-lg font-medium text-black">{item?.area}</p>
              <p className="text-xl font-semibold text-black">{item.price}</p>
              <button
                onClick={() => handleFormModel("Download Price Cost")}
                className="some-class py-2 px-4 text-white flex cursor-pointer justify-center items-center gap-2 text-sm"
              >
                Request for Price Breakup
              </button>
            </div>
          ))}
        </div>
        <HtmlSection html={project?.pricePlanContent || ""} />
      </section>
    </>
  );

  const renderGallerySection = () => (
    <section className="bg-white xl:rounded-md shadow-md mt-4" id="gallery">
      <div className="border-b-2 border-gray-300 py-3 text-center">
        <p className="text-xl font-semibold text-gray-700">Gallery</p>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {project?.gallery?.map((item, i) => (
            <img
              key={i}
              onClick={() => handleImageClick(item)}
              className="rounded cursor-pointer"
              src={item}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );

  const renderLocationSection = () => (
    <section className="bg-white xl:rounded-md shadow-md mt-4" id="location">
      <div className="border-b-2 border-gray-300 py-3 text-center">
        <p className="text-xl font-semibold text-gray-700">Location</p>
      </div>
      <div className="p-5">
        {project?.mapLink && (
          <iframe
            className="rounded-md"
            src={project?.mapLink}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>
      <HtmlSection html={project?.locationContent || ""} />
    </section>
  );

  const renderAboutDeveloperSection = () => (
    <section className="bg-white xl:rounded-md shadow-md mt-4" id="aboutdeveloper">
      <div className="border-b-2 border-gray-300 py-3 text-center">
        <p className="text-xl font-semibold text-gray-700">More About</p>
      </div>
      <div className="p-5 text-black">
        <div dangerouslySetInnerHTML={{ __html: project?.about || "" }} />
      </div>
    </section>
  );

  const renderFaqSection = () => (
    <section className="w-full mt-4 bg-white xl:rounded-md shadow-md" id="faq">
      <div className="border-b-2 border-gray-300 py-3 text-center">
        <p className="text-xl font-semibold text-gray-700">Frequently Asked Questions</p>
      </div>
      <div className="p-5 text-black flex flex-col gap-3">
        {project?.faqList?.map((item, i) => (
          <div key={i} className="overflow-hidden">
            <div
              onClick={() => handleFaq(item._id)}
              className="bg-[var(--primary)] text-white shadow-md rounded-md p-2 cursor-pointer"
            >
              <h4 className="text-lg font-semibold flex justify-between items-center">
                {item?.question}
                <FaArrowAltCircleDown
                  className={`transition-transform duration-300 ${currId === item._id ? "rotate-180" : ""}`}
                />
              </h4>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                currId === item._id ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="shadow-md p-2 rounded-md text-slate-800 text-[17px]">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  if (isLoading)
    return (
      <div className="bg-[#dbe4e9] min-h-[80vh] flex justify-center items-center">
        <Spinner />
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 min-h-[80vh] flex justify-center items-center">
        Error: {error}
      </div>
    );

  return (
    <div className="bg-[#dbe4e9] min-h-[60vh] lg:py-15 xl:py-20">
      <div className="xl:w-[85%] flex flex-col lg:flex-row justify-between gap-4 m-auto">
        {/* Left Column */}
        <div className="xl:w-[72%] w-full flex flex-col xl:gap-4">
          <div className="w-full lg:hidden block bg-white py-2 px-3 shadow z-40 sticky top-15">
            <ProjectMiniNavbar />
          </div>

          <div className="pt-14 lg:pt-0 xl:pt-0">
            <img
              className="w-full h-[200px] md:h-[300px] lg:h-[400px] xl:rounded-md"
              src={project?.mainImage}
              alt=""
            />
          </div>

          <span
            className="bg-[var(--primary)] text-white text-center block md:hidden drop-shadow-md p-1"
            style={{ textShadow: "1px 2px 3px rgba(1, 0, 1, 1)" }}
          >
            Booking Open
          </span>

          <div className="w-full bg-white xl:rounded-md md:p-5 p-0 shadow-md mt-4">
            <h1 className="text-3xl pt-2 font-bold text-center md:text-start text-gray-700">
              {project?.projectName || ""}
            </h1>

            <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-2">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center md:justify-start gap-2 text-md py-1 text-white md:text-gray-700">
                  <span className="p-1 rounded-full bg-[#dbe4e9] text-black">
                    <FaLayerGroup />
                  </span>
                  <p>By {project?.developer || ""}</p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-md py-1 text-white md:text-gray-700">
                  <span className="p-1 rounded-full bg-[#dbe4e9] text-black">
                    <FaLocationPin />
                  </span>
                  <p>
                    {project?.location || ""}, {project?.city?.cityName || ""}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ProjectMiniNavbar />

          {renderOverviewSection()}
          {renderAmenitiesSection()}
          {renderPaymentPlanSection()}
          {renderGallerySection()}
          {renderLocationSection()}
          {renderAboutDeveloperSection()}
          {renderFaqSection()}
        </div>

        {/* Right Column */}
        <div className="xl:w-[28%] w-full">
          <div className="lg:sticky lg:top-20">
            <LeadForm projectName={project?.projectName} />
          </div>
        </div>
      </div>

      {/* Modals */}
      <ImageModel currViewImage={currViewImage} />
      {isFormOpen && <FormModel heading={formHeading} onClose={() => setIsFormOpen(false)} />}
    </div>
  );
}

export default ProjectViewPage;
