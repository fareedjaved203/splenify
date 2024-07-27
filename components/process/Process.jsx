import React from "react";
import { ContentWrapper } from "../layouts/ContentWrapper";
import Image from "next/image";

const Process = () => {
  return (
    <ContentWrapper
      className={`flex justify-center items-center md:mt-20 lg:mt-36 flex-col`}
    >
      <div className="space-y-4">
        <p className="text-center text-lg font-normal font-poppins">
          How we do it?
        </p>
        <div className="md:text-[40px] lg:text-[46px] font-recoleta font-black text-center">
          World-class apps on demand, with our{" "}
          <span className="text-[#DF56FE]">process!</span>
        </div>
      </div>
      <div className="mt-10">
        <Image
          src={"/process.svg"}
          width={10}
          height={10}
          alt="process"
          className="w-[1160px] h-[305px]"
        />
      </div>
    </ContentWrapper>
  );
};

export default Process;
