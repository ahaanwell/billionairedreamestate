"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-[#cb4e16]/95 backdrop-blur shadow-lg" : "bg-[#cb4e16]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">
          
          {/* Logo + Country */}
          <div className="flex items-center gap-6">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-[140px] object-contain"
              />
            </Link>

            <select
              className="bg-transparent border-b border-white/60 text-white text-sm px-2 py-1 
              focus:outline-none focus:text-black focus:bg-white rounded-md transition"
            >
              <option>India</option>
            </select>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
            {["Projects", "About", "Contact", "Career"].map((item) => (
              <Link
                key={item}
                href={"#"}
                className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white p-2 rounded-md hover:bg-white/10 transition"
          >
            <FaBarsStaggered size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[300px] bg-[#0b0b0b] z-50 p-4 
        transition-transform duration-500 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-white/20 pb-4">
          <img src="/logo.png" alt="Logo" className="w-[140px]" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-3xl hover:text-red-400 transition"
          >
            <IoCloseSharp />
          </button>
        </div>

        <ul className="mt-6 flex flex-col gap-4 text-white text-lg">
          {["about", "contact", "career"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-white/10 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
