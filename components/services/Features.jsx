import React from "react";
import Image from "next/image";

const Features = ({ title, imageSrc, color = "#4E758D" }) => {
  return (
    <div className="mr-2 mb-2 flex justify-center items-center space-x-[4.8px] bg-white rounded-[32px] h-[34px] py-[5px] px-[10px]">
      <Image
        src={imageSrc}
        width={10}
        height={10}
        alt="service-feature"
        className="w-[19.2px] h-[19.2px]"
      />
      <p className={`font-normal text-sm text-[${color}]`}>{title}</p>
    </div>
  );
};

export default Features;
