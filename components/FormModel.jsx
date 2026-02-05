"use client";

import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { PiWhatsappLogoBold } from "react-icons/pi";
import Link from "next/link";

export default function FormModel({ projectName }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    number: "",
    countryCode: "+91",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...leadData, projectName }),
      });

      if (res.ok) {
        alert("Thank you! Our expert will contact you shortly.");
        document.getElementById("formModel").close();
        setLeadData({
          name: "",
          email: "",
          number: "",
          countryCode: "+91",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Server error. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <dialog id="formModel" className="modal z-[9999]">
      <div className="modal-box max-w-5xl p-0 rounded-2xl overflow-hidden">

        {/* Close */}
        <form method="dialog">
          <button className="absolute right-4 top-4 text-black z-10 cursor-pointer">
            <ImCross />
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* LEFT – VISUAL */}
          <div className="relative bg-[url('/form-bg.jpg')] bg-cover bg-center min-h-[260px] md:min-h-full">
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 p-8 flex flex-col justify-center h-full text-white">
              <h3 className="text-2xl lg:text-3xl font-bold leading-snug">
                {projectName || "Premium Homes Crafted for Modern Living"}
              </h3>

              <p className="mt-3 text-sm text-white/90">
                Get complete project details, best price offers & priority site visit.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <p>✔ Verified Projects</p>
                <p>✔ Transparent Pricing</p>
                <p>✔ Dedicated Relationship Manager</p>
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="p-8 bg-white">
            <h4 className="text-xl font-semibold text-gray-900">
              Request Call Back
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Fill in your details & our expert will assist you
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <input
                name="name"
                required
                placeholder="Your Name"
                value={leadData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-[var(--primary)]"
              />

              <div className="flex gap-3">
                <select
                  name="countryCode"
                  value={leadData.countryCode}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-2 outline-none"
                >
                  <option value="+91">+91</option>
                  <option value="+971">+971</option>
                  <option value="+44">+44</option>
                  <option value="+1">+1</option>
                </select>

                <input
                  name="number"
                  type="tel"
                  required
                  placeholder="Mobile Number"
                  value={leadData.number}
                  onChange={handleChange}
                  className="flex-1 border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-[var(--primary)]"
                />
              </div>

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                value={leadData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-[var(--primary)]"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer bg-[var(--primary)] text-white py-3 rounded-md font-semibold tracking-wide hover:opacity-90 transition"
              >
                {isSubmitting ? "Please wait..." : "Get Best Offers"}
              </button>

              {/* Quick actions */}
              <div className="flex gap-3">
                <Link
                  href={`https://wa.me/919731759315?text=Hi,%20I%20am%20interested%20in%20${projectName}`}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 border border-green-500 text-green-600 py-2 rounded-md text-sm font-medium"
                >
                  <PiWhatsappLogoBold />
                  WhatsApp
                </Link>

                <Link
                  href="tel:+919731759315"
                  className="flex-1 flex items-center justify-center gap-2 border border-blue-500 text-blue-600 py-2 rounded-md text-sm font-medium"
                >
                  <IoCall />
                  Call
                </Link>
              </div>

              <p className="text-xs text-gray-500 text-center">
                No spam. Your information is 100% secure.
              </p>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
}
