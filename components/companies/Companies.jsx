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
    <ContentWrapper className={`flex justify-center items-center mt-[102px]`}>
      <div>
        <Image
          src={"/company-1.svg"}
          width={10}
          height={10}
          alt="company"
          className="w-[210px] h-[190px]"
        />
      </div>
      <div className="mt-10">
        <p className="font-poppins font-normal text-lg text-center mb-10">
          We have worked with
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 opacity-[30%] gap-6">
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
      <div>
        <Image
          src={"/company-2.svg"}
          width={10}
          height={10}
          alt="company"
          className="w-[210px] h-[190px]"
        />
      </div>
    </ContentWrapper>
  );
};

export default Companies;
