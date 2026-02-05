import React from "react";
import { MdRealEstateAgent } from "react-icons/md";

function TrustedSection() {
  const features = [
    {
      title: "Explore Prime Neighborhoods",
      desc: "Discover premium homes in the most sought-after locations, guided by trusted real estate experts.",
    },
    {
      title: "Connect with Verified Agents",
      desc: "Get matched with top-rated agents who understand your needs and simplify your buying journey.",
    },
    {
      title: "Highly Rated Apartments",
      desc: "Browse handpicked apartments with world-class amenities and excellent resale value.",
    },
    {
      title: "Track Recent Property Sales",
      desc: "Stay informed with the latest property transactions, price trends, and market insights.",
    },
  ];

  return (
    <section className="some-class py-16">
      <div className="w-[95%] md:w-[90%] mx-auto flex flex-col xl:flex-row gap-12 items-center">

        {/* Left Content */}
        <div className="xl:w-[55%] w-full">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Trusted by Millions of <br /> Home Buyers Across India
          </h2>

          <p className="text-white/90 mt-4 text-lg">
            We connect you directly with verified developers and experienced agents,
            ensuring complete transparency and confidence in every property decision.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg 
                hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  
                  {/* Icon */}
                  <div className="flex items-center justify-center 
                    w-12 h-12 rounded-full some-class text-white text-2xl">
                    <MdRealEstateAgent />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    <button className="mt-3 text-[var(--primary)] font-semibold hover:underline">
                      Learn more
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="xl:w-[45%] w-full hidden xl:flex justify-center">
          <img
            src="/trusted.webp"
            alt="Trusted real estate platform"
            className="max-w-full rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default TrustedSection;
