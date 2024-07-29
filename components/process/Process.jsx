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
      <div className="mt-20 w-full xl:max-w-[1160px] h-full max-h-[305px] flex md:flex-row flex-col">
        <Step title={"Discovery Call"} imageSrc={"/phone.svg"} height={"97"} />
        <Step title={"Research"} imageSrc={"/bulb.svg"} height={"117"} />

        <Step
          title={"UI/UX Design"}
          imageSrc={"/mobile.svg"}
          height={"136.76"}
        />
        <Step
          title={"Front-End Development"}
          imageSrc={"/laptop-front.svg"}
          height={"155.73"}
        />
        <Step
          title={"Back-End Development"}
          imageSrc={"/laptop-back.svg"}
          height={"168"}
        />
        <Step
          title={"Deployment"}
          imageSrc={"/deployment.svg"}
          height={"190.52"}
        />
        <Step
          title={"Maintenance"}
          imageSrc={"/maintenance.svg"}
          height={"232"}
        />
      </div>
    </ContentWrapper>
  );
};

export default Process;
