import React from "react";
import Image from "next/image";
import { ContentWrapper } from "../layouts/ContentWrapper";

const Companies = () => {
  return (
    <ContentWrapper className={`flex justify-center items-center mt-36`}>
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
        <Image
          src={"/companies.svg"}
          width={10}
          height={10}
          alt="company"
          className="w-[776px] h-[87px]"
        />
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
