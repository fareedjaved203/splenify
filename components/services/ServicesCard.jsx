import React from "react";
import Features from "./Features";

const ServicesCard = ({ title }) => {
  return (
    <div className="w-full lg:w-[357px] dark:lg:w-[360px] lg:h-[273px] h-auto rounded-[20px] gap-2 bg-[#F3F3F9] dark:bg-slate-800">
      <div className="dark:mx-5 mx-6 mb-6 mt-12">
        <h1 className="font-poppins font-medium text-2xl dark:text-slate-200">
          {title}
        </h1>
        <div className="mt-4 flex flex-wrap">
          <Features
            title={"UX Audit"}
            imageSrc={"/service-audit"}
            color="#7165FF"
          />
          <Features
            title={"Research & Strategy"}
            imageSrc={"/service-research"}
            color="#4E758D"
          />
          <Features title={"User Journey Map"} imageSrc={"/service-user"} />
          <Features
            title={"Information Architecture"}
            imageSrc={"/service-architecture"}
          />
          <Features title={"Usability testing"} imageSrc={"/service-testing"} />
          <Features title={"UX Writing"} imageSrc={"/service-writing"} />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
