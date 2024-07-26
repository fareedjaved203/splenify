import React from "react";
import { ContentWrapper } from "../layouts/ContentWrapper";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <ContentWrapper
      className={`flex justify-center items-center mt-36 flex-col font-poppins`}
    >
      <div className="space-y-4">
        <p className="text-center text-lg font-normal">
          and we go beyond just visuals…
        </p>
        <h1 className="text-[46px] font-roboto italic font-black text-center">
          Our full scope of <span className="text-[#F149FF]">design</span> &{" "}
          <span className="text-[#7165FF]">development</span> services include
        </h1>
      </div>
      <div className="mt-[46px] grid grid-cols-1 md:grid-cols-2 place-items-center xl:grid-cols-3 gap-[44px] w-full max-w-[1159px] ">
        <ServicesCard title={"UX"} />
        <ServicesCard title={"UI"} />
        <ServicesCard title={"Front-End"} />
        <ServicesCard title={"Back-End"} />
        <ServicesCard title={"Deployment"} />
        <ServicesCard title={"Maintenance"} />
      </div>
    </ContentWrapper>
  );
};

export default Services;
