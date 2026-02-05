import Link from "next/link";
import React from "react";
import {
  FaLocationDot,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#141416] text-gray-300">
        <div className="w-[90%] max-w-7xl mx-auto py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* About */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-4">
                About Billionaire Dream Estate
              </h4>
              <p className="text-sm leading-relaxed">
                Billionaire Dream Estate Pvt Ltd is a trusted real estate
                advisory platform helping buyers and investors discover premium
                residential and commercial properties. We focus on transparency,
                expertise, and personalized service to deliver confident real
                estate decisions.
              </p>
            </div>

            {/* Property Types */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-4">
                Property Types
              </h4>
              <ul className="flex flex-col gap-3 text-sm">
                <li><Link href="#">Apartments</Link></li>
                <li><Link href="#">Villas</Link></li>
                <li><Link href="#">Plots & Land</Link></li>
                <li><Link href="#">Commercial Spaces</Link></li>
                <li><Link href="#">Farm Houses</Link></li>
                <li><Link href="#">Luxury Homes</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3 text-sm">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <img
                src="/logo.png"
                alt="Billionaire Dream Estate"
                className="w-[180px] mb-5"
              />

              <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="p-2 bg-[var(--primary)] rounded-full text-white">
                    <FaLocationDot />
                  </span>
                  <p>
                    2nd Floor, Aarathi Buildings, <br /> No.186, Muthanallur Cross Sarjapur, Bangalore 562125, India
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="p-2 bg-[var(--primary)] rounded-full text-white">
                    <IoCall />
                  </span>
                  <a href="tel: +919731759315">+91 97317 59315</a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="p-2 bg-[var(--primary)] rounded-full text-white">
                    <IoMail />
                  </span>
                  <a href="mailto:info@billionairedreamestate.in">
                    info@billionairedreamestate.in
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                <Link href="#" className="p-2 bg-[#1877F2] rounded-full text-white">
                  <FaFacebookF />
                </Link>
                <Link href="#" className="p-2 bg-[#E4405F] rounded-full text-white">
                  <FaInstagram />
                </Link>
                <Link href="#" className="p-2 bg-[#0077B5] rounded-full text-white">
                  <FaLinkedinIn />
                </Link>
                <Link href="#" className="p-2 bg-[#1DA1F2] rounded-full text-white">
                  <FaXTwitter />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <section className="bg-[#141416] border-t border-gray-700">
        <p className="py-4 text-sm text-center text-gray-400 flex justify-center items-center gap-2">
          <FaRegCopyright />
          {year} Billionaire Dream Estate Pvt Ltd. All Rights Reserved.
        </p>
      </section>
    </>
  );
}

export default Footer;
