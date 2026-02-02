"use client";

import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { PiWhatsappLogoBold } from "react-icons/pi";
import Link from "next/link";

export default function FormModel({projectName}) {
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
      body: JSON.stringify({
        ...leadData,
        projectName,
      }),
    });

    if (res.ok) {

      alert("Thank you! We will contact you soon.");
      document.getElementById("formModel").close();
      setLeadData({
        name: "",
        email: "",
        number: "",
        countryCode: "+91",
      });
    } else {
      alert("Something went wrong. Try again.");
    }
  } catch (err) {
    setIsSubmitting(false);
    alert("Server error. Try again later.");
  }
};


  return (
    <dialog
      id="formModel"
      className="modal modal-middle z-[9999]"
    >
      <div className="modal-box max-w-4xl p-0 rounded-none">

        {/* Close */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle text-white cursor-pointer btn-ghost absolute right-3 top-3">
            <ImCross />
          </button>
        </form>

        {/* Header */}
        <div className="bg-[var(--primary)] p-4">
          <h3 className="text-center text-xl md:text-2xl font-semibold text-white">
            {projectName || "Enquire Now For More Details"}
          </h3>
        </div>

        {/* Body */}
        <div className="flex flex-col md:flex-row bg-white">

          {/* Left panel */}
          <div className="hidden md:flex w-[25%] flex-col gap-6 bg-[#f9f9f9] p-4">
            <div className="text-center">
              <img src="/telephone-call.webp" className="w-12 mx-auto" />
              <p className="text-xs mt-1">Instant Call Back</p>
            </div>
            <div className="text-center">
              <img src="/house.webp" className="w-12 mx-auto" />
              <p className="text-xs mt-1">Free Visit</p>
            </div>
            <div className="text-center">
              <img src="/rupees.webp" className="w-12 mx-auto" />
              <p className="text-xs mt-1">Unmatched Price</p>
            </div>
          </div>

          {/* Form */}
          <form className="w-full md:w-[75%] p-5 space-y-4">
            <input
              name="name"
              required
              placeholder="Name"
              value={leadData.name}
              onChange={handleChange}
              className="w-full border-b border-black p-2 outline-none"
            />

            <div className="flex gap-2">
              <select
                name="countryCode"
                value={leadData.countryCode}
                onChange={handleChange}
                className="border-b border-black outline-none"
              >
                <option value="+91">+91 (IND)</option>
                <option value="+971">+971 (UAE)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+1">+1 (USA)</option>
              </select>

              <input
                name="number"
                required
                type="tel"
                placeholder="Mobile No"
                value={leadData.number}
                onChange={handleChange}
                className="flex-1 border-b border-black p-2 outline-none"
              />
            </div>

            <input
              name="email"
              required
              type="email"
              placeholder="E-Mail Address"
              value={leadData.email}
              onChange={handleChange}
              className="w-full border-b border-black p-2 outline-none"
            />

            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-[var(--primary)] cursor-pointer text-white px-6 py-2 mx-auto block shadow-md"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {/* CTA buttons */}
            <div className="flex justify-between pt-2">
              <Link
                href={`https://wa.me/919380660766?text=Hi!%20I%27m%20interested%20in%20${projectName}`}
                target="_blank"
                className="bg-[var(--primary)] text-white px-4 py-1 rounded flex items-center gap-1 text-sm"
              >
                <PiWhatsappLogoBold />
                WhatsApp
              </Link>

              <Link
                href="tel:+919380660766"
                className="bg-[var(--primary)] text-white px-4 py-1 rounded flex items-center gap-1 text-sm"
              >
                <IoCall />
                Call Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
