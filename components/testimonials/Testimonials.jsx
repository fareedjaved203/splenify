import React from "react";
import { ContentWrapper } from "../layouts/ContentWrapper";
import Image from "next/image";

const Testimonials = () => {
  return (
    <ContentWrapper
      className={`flex justify-center items-center flex-col mt-36`}
    >
      <div className="space-y-4">
        <p className="text-center text-lg font-normal">
          Don't take our word for it!
        </p>
        <div className="flex space-x-4">
          <Image
            src={"/left-leaf.svg"}
            width={10}
            height={10}
            alt="leaf"
            className="w-[55px] h-[84px]"
          />
          <h1 className="text-[46px] font-roboto italic font-black text-center mt-2">
            Hear it from our <span className="text-[#7165FF]">clients</span>
          </h1>
          <Image
            src={"/right-leaf.svg"}
            width={10}
            height={10}
            alt="leaf"
            className="w-[55px] h-[84px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-10"></div>
      </div>
    </ContentWrapper>
  );
};

export default Testimonials;
