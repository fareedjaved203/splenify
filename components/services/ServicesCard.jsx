import React from "react";
import Features from "./Features";

const ServicesCard = ({ title }) => {
  return (
    <div className="w-full lg:w-[357px] lg:h-[273px] h-auto rounded-[20px] gap-2 bg-[#F3F3F9]">
      <div className="mx-6 mb-6 mt-12">
        <h1 className="font-poppins font-medium text-2xl">{title}</h1>
        <div className="mt-4 flex flex-wrap">
          <Features
            title={"UX Audit"}
            imageSrc={"/service-audit.svg"}
            color="#7165FF"
          />
          <Features
            title={"Research & Strategy"}
            imageSrc={"/service-research.svg"}
          />
          <Features title={"User Journey Map"} imageSrc={"/service-user.svg"} />
          <Features
            title={"Information Architecture"}
            imageSrc={"/service-architecture.svg"}
          />
          <Features
            title={"Usability testing"}
            imageSrc={"/service-testing.svg"}
          />
          <Features title={"UX Writing"} imageSrc={"/service-writing.svg"} />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
