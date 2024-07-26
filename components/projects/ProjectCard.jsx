import Image from "next/image";
import React from "react";

const ProjectCard = ({ title, description, imageSrc, height }) => {
  return (
    <div className="w-full max-w-[541px]">
      <Image
        src={imageSrc}
        width={10}
        height={10}
        alt="project"
        className={`w-full h-[${height}]`}
      />
      <div className="flex w-full justify-between items-start mt-[21px]">
        <div>
          <h1 className="font-poppins font-normal text-lg text-[#161C2D]">
            {title}
          </h1>
          <h2 className="font-poppins font-semibold text-[#161C2D] text-[26px]">
            {description}
          </h2>
        </div>
        <button className="w-[185.34px] h-[65.85px] rounded-[41px] bg-[#F3F3F9] text-nowrap gap-2 px-10 py-5 font-poppins font-normal text-base text-center">
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
