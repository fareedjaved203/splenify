import React from "react";
import { ContentWrapper } from "../layouts/ContentWrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <ContentWrapper
      className={`flex justify-center items-center flex-col mt-12`}
    >
      <div>
        <Image
          src={"/header.svg"}
          width={10}
          height={10}
          alt="header"
          className="h-[150px] w-[475px]"
        />
      </div>
      <div className="mt-4 md:mt-8">
        <h1 className="font-roboto italic font-black text-5xl md:text-7xl lg:text-[90px] text-center">
          Software{" "}
          <span className="bg-gradient-to-r from-[#F149FF] to-[#7165FF] text-transparent bg-clip-text">
            Solution
          </span>{" "}
          Partner
        </h1>
        <p className="mt-4 md:mt-8 text-[17px] text-[#000000AD] text-center">
          Your trusted partners for all things digital. Let&rsquo;s transform
          your online presence.
        </p>
      </div>
      <div className="md:mt-8 flex space-x-4 mt-4">
        <button className="w-[174px] h-[59px] text-[4F4F4F] text-base bg-gradient-to-r from-[#EFEFEF] to-[#E2E2E2] rounded-[20px]">
          Contact Us
        </button>
        <button className="w-[174px] h-[59px] text-[4F4F4F] text-base border-2 border-[#4F4F4F] rounded-[20px]">
          Book Meeting
        </button>
      </div>
      <div>
        <Image
          src={"/header-gallery.svg"}
          width={10}
          height={10}
          alt="gallery"
          className="w-[1154px] h-[727px] cover"
        />
      </div>
    </ContentWrapper>
  );
};

export default Hero;
