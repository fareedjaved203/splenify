import React from "react";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";

const Navbar = () => {
  return (
    <>
      <header className="w-full shadow-xl hidden min-[901px]:block bg-white dark:bg-slate-800 text-white dark:text-slate-400 font-inter bg-opacity-80 h-[105px]">
        <div className="mx-auto min-[900px]:px-4 min-[1440px]:px-0 py-5 w-full 2xl:max-w-[1336px] justify-center flex flex-nowrap flex-col md:flex-row items-center">
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
          <nav className="font-poppins font-semibold w-full max-w-[418px] md:mx-auto flex flex-wrap items-center justify-between text-base hover:cursor-pointer">
            <Link
              href="/"
              className="relative inline-block group font-medium text-[#878787] hover:text-[#262626] dark:hover:text-slate-200 dark:text-slate-300 active:text-[#262626] text-base hover:font-semibold"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-[2.31px] bg-[#00FAFE] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>

            <Link
              href="/work"
              className="relative inline-block group font-medium text-base hover:font-semibold text-[#878787] hover:text-[#262626] dark:hover:text-slate-200 dark:text-slate-300 active:text-[#262626]"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00FAFE] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>

            <Link
              href="/#feature"
              className="relative inline-block group font-medium text-base hover:font-semibold text-[#878787] hover:text-[#262626] dark:hover:text-slate-200 dark:text-slate-300 active:text-[#262626]"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00FAFE] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>

            <Link
              href="/#about"
              className="relative inline-block group font-medium text-base hover:font-semibold text-[#878787] hover:text-[#262626] dark:hover:text-slate-200 dark:text-slate-300 active:text-[#262626]"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00FAFE] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>
          </nav>

          <div className="flex justify-center items-center space-x-3">
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
      </header>
      <HamburgerMenu />
    </>
  );
};

export default Navbar;
