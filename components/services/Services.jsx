import React from "react";
import { ContentWrapper } from "../layouts/ContentWrapper";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <ContentWrapper
      className={`flex justify-center items-center mt-10 md:mt-28 lg:mt-36 flex-col font-poppins`}
    >
      <div className="space-y-4">
        <p className="text-center text-base md:text-lg font-normal">
          and we go beyond just visuals…
        </p>
        <h1 className="text-[30px] md:text-[40px] lg:text-[46px] font-recoleta italic font-black text-center">
          Our full scope of <span className="text-[#F149FF]">design</span> &{" "}
          <span className="text-[#7165FF]">development</span> services include
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="mt-[46px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[44px] xl:max-w-[1159px] ">
          <ServicesCard title={"UX"} />
          <ServicesCard title={"UI"} />
          <ServicesCard title={"Front-End"} />
          <ServicesCard title={"Back-End"} />
          <ServicesCard title={"Deployment"} />
          <ServicesCard title={"Maintenance"} />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Services;
