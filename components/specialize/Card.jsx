import React from "react";
import Image from "next/image";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="w-full max-w-[558px] h-full max-h-[600px] lg:max-h-[153px] flex justify-between lg:flex-row flex-col-reverse bg-[#F3F3F9] rounded-[20px] overflow-hidden">
      <div className="flex justify-center items-center w-full my-8 flex-1">
        <div className="space-y-2 flex justify-center items-center flex-col w-[220px] ml-16 mr-6">
          <h1 className="font-semibold text-start text-[19px] w-full">
            {title}
          </h1>
          <h4 className="font-normal text-start text-sm">{description}</h4>
        </div>
      </div>
      <Image
        src={imageSrc}
        alt="img"
        width={1000}
        height={1000}
        objectFit="cover"
        className="w-full xl:max-w-[265px] h-[153px] flex-1"
      />
    </div>
  );
};

export default Card;
