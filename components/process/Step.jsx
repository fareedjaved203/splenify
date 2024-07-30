import React from "react";
import Image from "next/image";
const Step = ({ title, imageSrc, height, imageWidth, imageHeight }) => {
  return (
    <div className={`flex flex-col justify-end items-center`}>
      <div className="w-full relative flex justify-center items-center">
        <Image
          src={imageSrc}
          width={50}
          height={50}
          alt="phone"
          style={{ width: imageWidth, height: imageHeight }}
          className={`absolute -bottom-4`}
        />
      </div>

      <div
        style={{ height: `${height}px` }}
        className="bg-[#F3F3F9] dark:bg-slate-800 w-[165px] rounded-[20px] flex justify-center items-start p-2"
      >
        <div className="w-[146px] h-[81px] rounded-[14px] text-center bg-white dark:bg-slate-700 text-[#616161] dark:text-slate-300 font-poppins font-semibold text-sm flex justify-center items-center">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Step;
