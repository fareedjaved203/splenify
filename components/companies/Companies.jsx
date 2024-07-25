import React from "react";
import Image from "next/image";
import { ContentWrapper } from "../layouts/ContentWrapper";

const Companies = () => {
  return (
    <ContentWrapper className={`flex justify-center items-center my-10`}>
      <div>
        <div></div>
      </div>
      <div>
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
      <div></div>
    </ContentWrapper>
  );
};

export default Companies;
