import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-4 mt-36 bg-white dark:bg-slate-800">
      <div className="container px-6 md:px-20 pt-12 pb-2 mx-auto flex flex-col sm:flex-row justify-between">
        <div
          className="font-mulish text-black dark:text-slate-200  flex-1 mb-4 sm:mb-0"
          style={{
            fontSize: "32px",
            letterSpacing: "-1.2px",
            fontWeight: "700",
          }}
        >
          <div>Ready to launch your next project?</div>
          <div
            className="text-opacity text-black dark:text-slate-300 mt-2"
            style={{
              fontSize: "19px",
              letterSpacing: "-0.2px",
              fontWeight: "400",
            }}
          >
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </div>
        </div>
        <div className="flex flex-1 items-center justify-start md:justify-end pr-4 sm:pr-16 mt-4 sm:mt-0">
          <button className="text-gray-800 dark:text-slate-200 p-3 bg-cyan-400 dark:bg-slate-600 rounded-lg px-4 sm:px-10 whitespace-nowrap">
            Get started a project
          </button>
        </div>
      </div>

      <div class="container px-6 md:px-20 py-24 md:mx-auto flex justify-center items-center md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-full md:w-64 flex-shrink-0 md:mx-0 text-center md:text-left">
          <Link href={"/"}>
            <div className="font-mulish font-extrabold text-2xl gap-3 text-[#2F2F2F] cursor-pointer flex justify-start items-center">
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
          <p
            class="font-mulish mt-4 text-black dark:text-slate-200 text-opacity"
            style={{ fontSize: "15px", fontWeight: "400" }}
          >
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <span class="inline-flex mt-16 md:mt-4">
            <a class="text-gray-900 dark:text-slate-200 social-icons">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-900 dark:text-slate-200 social-icons">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-900 dark:text-slate-200 social-icons">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-900 dark:text-slate-200 social-icons">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4 font-mulish">
            <h2
              class="font-medium text-black dark:text-slate-400 text-opacity text-sm mb-3"
              style={{
                fontSize: "15px",
              }}
            >
              Company
            </h2>
            <nav class="list-none mb-10">
              <li className="footer-list mt-4 cursor-pointer">
                <a class="text-black dark:text-slate-300">About us</a>
              </li>
              <li className="footer-list cursor-pointer">
                <a class="text-black dark:text-slate-300">Contact us</a>
              </li>
              <li className="footer-list cursor-pointer">
                <a class="text-black dark:text-slate-300">Careers</a>
              </li>
              <li className="footer-list cursor-pointer">
                <a class="text-black dark:text-slate-300">Press</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              class="font-medium text-black dark:text-slate-400  text-opacity text-sm mb-3"
              style={{
                fontSize: "15px",
              }}
            >
              Product
            </h2>
            <nav class="list-none mb-10">
              <li className="footer-list mt-4 cursor-pointer">
                <a class="text-black dark:text-slate-300">Features</a>
              </li>
              <li className="footer-list cursor-pointer">
                <a class="text-black dark:text-slate-300">Pricing</a>
              </li>
              <li className="footer-list cursor-pointer">
                <a class="text-black dark:text-slate-300">News</a>
              </li>
              <li className="footer-list cursor-pointer">
                <a class="text-black dark:text-slate-300">Help desk</a>
              </li>
              <li className="footer-list cursor-pointer">
                <a class="text-black dark:text-slate-300">Support</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              class="font-medium text-black dark:text-slate-400 text-opacity text-sm mb-3"
              style={{
                fontSize: "15px",
              }}
            >
              Services
            </h2>
            <nav class="list-none mb-10">
              <li className="footer-list mt-4 cursor-pointer">
                <a class="text-black dark:text-slate-300">Digital Marketing</a>
              </li>
              <li className="footer-list cursor-pointer">
                <a class="text-black dark:text-slate-300">Content Writing</a>
              </li>
              <li className="footer-list cursor-pointer">
                <a class="text-black dark:text-slate-300">SEO for Business</a>
              </li>
              <li className="footer-list cursor-pointer">
                <a class="text-black dark:text-slate-300">UI Design</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              class="font-medium text-black dark:text-slate-400 text-opacity text-sm mb-3"
              style={{
                fontSize: "15px",
              }}
            >
              Legal
            </h2>
            <nav class="list-none mb-10">
              <li className="footer-list mt-4 cursor-pointer">
                <a class="text-black dark:text-slate-300">Privacy Policy</a>
              </li>
              <li className="footer-list cursor-pointer">
                <a class="text-black dark:text-slate-300">Terms & Conditions</a>
              </li>
              <li className="footer-list cursor-pointer">
                <a class="text-black dark:text-slate-300">Return Policy</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
