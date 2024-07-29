import React from "react";
import Image from "next/image";

const TestimonialCard = ({
  logo,
  userImage,
  review,
  profileImage,
  name,
  role,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-2xl dark:shadow-none rounded-[16px] gap-4 p-6 border-[3px] border-white dark:border-slate-800 space-y-4">
      <Image
        src={logo}
        width={10}
        height={10}
        alt="review-img"
        className="w-[86px] h-[28px]"
      />
      {userImage && (
        <Image
          src={userImage}
          width={10}
          height={10}
          alt="review-img"
          className="w-[350px] h-[239px] rounded-[16px]"
        />
      )}
      <h1 className="font-roboto font-normal text-base dark:text-slate-400">
        <p dangerouslySetInnerHTML={{ __html: review }} />
      </h1>
      <div className="flex justify-start items-center space-x-4">
        <Image
          src={profileImage}
          width={10}
          height={10}
          alt="profile"
          className="w-[60px] h-[60px] rounded-[72px]"
        />
        <div>
          <h1 className="font-semibold text-base dark:text-slate-400">
            {name}
          </h1>
          <p className="font-roboto font-normal text-sm text-center dark:text-slate-400">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
