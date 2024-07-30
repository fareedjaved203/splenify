import React from "react";
import Image from "next/image";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="w-full max-w-[558px] h-full max-h-[600px] lg:max-h-[153px] flex justify-between lg:flex-row flex-col-reverse bg-[#F3F3F9] dark:bg-slate-800 rounded-[20px] overflow-hidden">
      <div className="flex justify-center items-center w-full my-8 flex-1">
        <div className="space-y-2 flex justify-center items-center flex-col w-full sm:w-[220px] sm:ml-16 sm:mr-6">
          <h1 className="font-semibold text-center sm:text-start text-[19px] w-full dark:text-slate-300">
            {title}
          </h1>
          <h4 className="font-normal text-center sm:text-start text-sm dark:text-slate-300 px-4 sm:px-0">
            {description}
          </h4>
        </div>
      </div>
      <div>
        <Image
          src={imageSrc}
          alt="img"
          width={1000}
          height={1000}
          objectFit="cover"
          className="w-full h-auto xl:max-w-[265px] sm:h-[153px]"
        />
      </div>
    </div>
  );
};

export default Card;
