"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "../ThemeSwitch";

const HamburgerMenu = () => {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <header
      className={`max-[900px]:block hidden h-[105px] px-4 bg-white dark:bg-slate-800`}
    >
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-row justify-between items-center w-full h-full">
          <Link href={"/"}>
            <div className="font-mulish font-extrabold text-2xl gap-3 text-[#2F2F2F] cursor-pointer flex justify-center items-center">
              <Image
                src={"/logo.svg"}
                width={10}
                height={10}
                alt="logo"
                className="w-[29.25px] h-[37.71px]"
              />
              <p className="dark:text-slate-300">Splenify</p>
            </div>
          </Link>

          <button
            onClick={toggleSidebar}
            className="lg:hidden text-[#00FAFE] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 pointer-events:none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isSidebarVisible && (
            <div
              className={`fixed top-0 left-0 h-screen lg.5:hidden 
      transition-transform duration-300 transform ${
        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
      }`}
              style={{
                zIndex: "20",
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="flex flex-col w-64 bg-white dark:bg-slate-800 h-full">
                <div className="p-3 w-full flex justify-end">
                  <button onClick={() => setSidebarVisibility(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="40"
                      height="40"
                      viewBox="0 0 50 50"
                      fill="#00FAFE"
                    >
                      <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col flex-1 overflow-y-auto h-full text-[15px] justify-start items-center space-y-8">
                  <nav className="font-poppins font-semibold flex flex-col flex-wrap items-center text-base justify-center hover:cursor-pointer space-y-6">
                    <Link
                      href="/"
                      className="relative inline-block group font-normal text-[#878787] hover:text-[#262626] active:text-[#262626] text-base"
                    >
                      Home
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00FAFE] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
                    </Link>

                    <Link
                      href="/work"
                      className="relative inline-block group font-normal text-base text-[#878787] hover:text-[#262626] active:text-[#262626]"
                    >
                      Projects
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00FAFE] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
                    </Link>

                    <Link
                      href="/#feature"
                      className="relative inline-block group font-normal text-base text-[#878787] hover:text-[#262626] active:text-[#262626]"
                    >
                      About
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00FAFE] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
                    </Link>

                    <Link
                      href="/#about"
                      className="relative inline-block group font-normal text-base text-[#878787] hover:text-[#262626] active:text-[#262626]"
                    >
                      Contact
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00FAFE] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
                    </Link>
                  </nav>

                  <div className="flex justify-center items-center flex-col space-y-3">
                    <div>
                      <ThemeSwitch />
                    </div>
                    <Link href={"/#contact"}>
                      <button className="font-poppins border border-[#00FAFE] font-semibold text-sm text-[#878787] dark:text-slate-300 rounded-[48px] flex justify-center items-center text-nowrap h-[50px] w-[171.22px]">
                        Schedule a call
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HamburgerMenu;
