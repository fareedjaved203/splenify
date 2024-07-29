import React from "react";
import Image from "next/image";
import { ContentWrapper } from "../layouts/ContentWrapper";

const Companies = () => {
  const imageSources = [
    "/company-logo1.svg",
    "/company-logo2.svg",
    "/company-logo3.svg",
    "/company-logo4.svg",
    "/company-logo5.svg",
    "/company-logo6.svg",
    "/company-logo7.svg",
    "/company-logo8.svg",
    "/company-logo9.svg",
  ];
  return (
    <ContentWrapper
      className={`hidden lg:flex justify-center items-center md:mt-10 lg:mt-[102px]`}
    >
      <div className="flex flex-col space-y-6">
        <div className="relative w-[150px] h-[70px]  lg:w-[180px] lg:h-[85px] bg-white dark:bg-slate-800 flex justify-end items-center flex-col font-poppins rounded-[24px] rotate-15 border border-[#0E131930] p-6">
          <p className="font-medium text-[30px] lg:text-[36px] text-[#7266FF]">
            300 +
          </p>
          <p className="font-normal text-sm lg:text-base text-[#909090] dark:text-slate-400  absolute bottom-3">
            Happy Clients
          </p>
        </div>

        <div className="relative w-[150px] h-[70px] dark:bg-slate-800 lg:w-[180px] lg:h-[85px] bg-white flex justify-end items-center flex-col font-poppins rounded-[24px] -rotate-15 border border-[#0E131930] p-6">
          <p className="font-medium text-[30px] lg:text-[36px] text-[#7266FF]">
            40 +
          </p>
          <p className="font-normal text-sm lg:text-base text-[#909090] dark:text-slate-400 absolute bottom-3">
            Skillful Talent
          </p>
        </div>
      </div>
      <div className="mt-8">
        <p className="font-poppins font-normal text-base md:text-lg text-center mb-10">
          We have worked with
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 opacity-[30%] gap-6 xl:max-w-[775px] lg:mx-[55px] mx-auto">
          {imageSources.map((src, index) => (
            <Image
              key={index}
              src={src}
              width={10}
              height={10}
              alt={`logo-${index + 1}`}
              className="w-full max-w-[141px] h-[36px]"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="relative w-[150px] h-[70px] dark:bg-slate-800 lg:w-[180px] lg:h-[85px] bg-white flex justify-end items-center flex-col font-poppins rounded-[24px] -rotate-15 border border-[#0E131930] p-6">
          <p className="font-medium text-[30px] lg:text-[36px] text-[#7266FF]">
            10 +
          </p>
          <p className="font-normal text-sm lg:text-base text-[#909090] dark:text-slate-400 absolute bottom-3">
            Years on market
          </p>
        </div>

        <div className="relative w-[150px] h-[70px] dark:bg-slate-800 lg:w-[180px] lg:h-[85px] bg-white flex justify-end items-center flex-col font-poppins rounded-[24px] rotate-15 border border-[#0E131930] p-6">
          <p className="font-medium text-[30px] lg:text-[36px] text-[#7266FF]">
            80 +
          </p>
          <p className="font-normal text-sm lg:text-base text-[#909090] dark:text-slate-400 absolute bottom-3">
            App built
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Companies;
