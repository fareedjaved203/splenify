import React from "react";
import { ContentWrapper } from "../layouts/ContentWrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <ContentWrapper
      className={`flex justify-center items-center flex-col mt-12`}
    >
      <div className="relative">
        <div className="flex space-x-2 sm:space-x-4">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[80px] h-[30px] sm:w-[108px] sm:h-[43px] font-medium text-[14.58px] flex justify-center items-center bg-white dark:bg-slate-800 text-[#7268FA] border border-[#0E131930] rounded-[10px] gap-[11px] -rotate-15">
              App Dev
            </div>
            <div>
              <Image
                src={"/hero-arrow-left.svg"}
                width={10}
                height={10}
                alt="arrow"
                className="w-[45px] h-[90px]"
              />
            </div>
          </div>
          <div className="w-[80px] h-[30px] sm:w-[108px] sm:h-[43px] font-medium text-[14.58px] flex justify-center items-center bg-white dark:bg-slate-800 text-[#7268FA] border border-[#0E131930] rounded-[10px] gap-[11px] rotate-15">
            UI UX
          </div>
          <div className="w-[80px] h-[30px] sm:w-[108px] sm:h-[43px] font-medium text-[14.58px] flex justify-center items-center bg-white dark:bg-slate-800 text-[#7268FA] border border-[#0E131930] rounded-[10px] gap-[11px] -rotate-15">
            Design
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[80px] h-[30px] sm:w-[108px] sm:h-[43px] font-medium text-[14.58px] flex justify-center items-center bg-white dark:bg-slate-800 text-[#7268FA] border border-[#0E131930] rounded-[10px] gap-[11px] rotate-15">
              Writing
            </div>
            <div>
              <Image
                src={"/hero-arrow-right.svg"}
                width={10}
                height={10}
                alt="arrow"
                className="w-[45px] h-[90px]"
              />
            </div>
          </div>
        </div>
        <p className="font-poppins text-[25px] sm:text-[37px] font-normal text-center absolute top-16 sm:left-28 left-[85px]">
          Your Ultimate
        </p>
      </div>
      <div className="mt-4 md:mt-8">
        <h1 className="font-recoleta font-normal text-[40px] sm:text-[55px] md:text-5xl lg:text-[90px] text-center">
          Software{" "}
          <span className="bg-gradient-to-r from-[#F149FF] to-[#7165FF] text-transparent bg-clip-text">
            Solution
          </span>{" "}
          Partner
        </h1>
        <p className="mt-4 md:mt-8 text-sm sm:text-[17px] text-[#000000AD] dark:text-white text-center">
          Your trusted partners for all things digital. Let&rsquo;s transform
          your online presence.
        </p>
      </div>
      <div className="md:mt-8 flex space-x-2 sm:space-x-4 mt-4">
        <button className="w-[140px] h-[50px] sm:w-[174px] sm:h-[59px] text-[4F4F4F] text-sm sm:text-base light:bg-gradient-to-r from-[#EFEFEF] to-[#E2E2E2] rounded-[20px] dark:bg-slate-800 dark:text-white">
          Contact Us
        </button>
        <button className="w-[140px] h-[50px] sm:w-[174px] sm:h-[59px] text-[4F4F4F] text-sm sm:text-base border-2 border-[#4F4F4F] rounded-[20px]">
          Book Meeting
        </button>
      </div>
      <div className="mt-10 w-full">
        <Image
          src={"/hero-gallery.png"}
          width={1200}
          height={1200}
          alt="gallery"
          className="w-full xl:w-[1154px] h-auto"
        />
      </div>
    </ContentWrapper>
  );
};

export default Hero;
