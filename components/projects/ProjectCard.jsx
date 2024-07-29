import Image from "next/image";
import React from "react";

const ProjectCard = ({ title, description, imageSrc, height }) => {
  return (
    <div className="w-full md:max-w-[541px]">
      <Image
        src={imageSrc}
        width={10}
        height={10}
        alt="project"
        className={`w-full h-[${height}]`}
      />
      <div className="flex w-full justify-between items-start mt-[21px]">
        <div>
          <h1 className="font-poppins font-normal text-sm lg:text-lg text-[#161C2D] dark:text-slate-300">
            {title}
          </h1>
          <h2 className="font-poppins font-semibold text-[#161C2D] text-lg lg:text-[26px] dark:text-slate-300">
            {description}
          </h2>
        </div>
        <button className="py-3 px-5 lg:w-[185.34px] lg:h-[65.85px] rounded-[41px] bg-[#F3F3F9] dark:bg-slate-800 text-nowrap gap-2 lg:px-10 lg:py-5 font-poppins font-normal text-sm lg:text-base text-center dark:text-slate-400">
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
