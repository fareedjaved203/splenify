import React from "react";
import { ContentWrapper } from "../layouts/ContentWrapper";
import Image from "next/image";
import Step from "./Step";

const Process = () => {
  return (
    <ContentWrapper
      className={`xl:flex justify-center items-center mt-10 md:mt-20 lg:mt-36 flex-col hidden`}
    >
      <div className="space-y-4">
        <p className="text-center text-base md:text-lg font-normal font-poppins">
          How we do it?
        </p>
        <div className="text-[30px] md:text-[40px] lg:text-[46px] font-recoleta font-black text-center">
          World-class apps on demand, with our{" "}
          <span className="text-[#DF56FE]">process!</span>
        </div>
      </div>
      <div className="mt-28 w-full xl:max-w-[1160px] h-full max-h-[305px] flex md:flex-row flex-col">
        <Step
          title={"Discovery Call"}
          imageSrc={"/phone.svg"}
          height={"97"}
          imageWidth={"68px"}
          imageHeight={"68px"}
        />
        <Step
          title={"Research"}
          imageSrc={"/bulb.svg"}
          height={"117"}
          imageWidth={"65px"}
          imageHeight={"90px"}
        />

        <Step
          title={"UI/UX Design"}
          imageSrc={"/mobile.svg"}
          height={"136.76"}
          imageWidth={"59px"}
          imageHeight={"93px"}
        />
        <Step
          title={"Front-End Development"}
          imageSrc={"/laptop-front.svg"}
          height={"155.73"}
          imageWidth={"90px"}
          imageHeight={"86px"}
        />
        <Step
          title={"Back-End Development"}
          imageSrc={"/laptop-back.svg"}
          height={"168"}
          imageWidth={"78px"}
          imageHeight={"85px"}
        />
        <Step
          title={"Deployment"}
          imageSrc={"/deployment.svg"}
          height={"190.52"}
          imageWidth={"69px"}
          imageHeight={"113px"}
        />
        <Step
          title={"Maintenance"}
          imageSrc={"/maintenance.svg"}
          height={"232"}
          imageWidth={"87px"}
          imageHeight={"120px"}
        />
      </div>
    </ContentWrapper>
  );
};

export default Process;
