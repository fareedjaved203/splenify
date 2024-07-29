import React from "react";
import Image from "next/image";
import { ContentWrapper } from "../layouts/ContentWrapper";
import Card from "./Card";

const Specialize = () => {
  return (
    <ContentWrapper
      className={`flex justify-center items-center mt-10 md:mt-20 lg:mt-36 flex-col font-poppins`}
    >
      <div className="space-y-4">
        <p className="text-center text-base md:text-lg font-normal">
          What do we specialize in?
        </p>
        <h1 className="text-[30px] md:text-[40px] lg:text-[46px] font-recoleta font-black text-center">
          Our partners hire us to{" "}
          <span className="text-[#7165FF]">design &amp; develop</span> their…
        </h1>
      </div>
      <div className="mt-[55px] grid grid-cols-1 md:grid-cols-2 gap-[44px] ">
        <Card
          title={"Mobile & Web Apps"}
          description={"We&rsquo;ll research your product and start building."}
          imageSrc={"/specialize-img1.png"}
        />
        <Card
          title={"Mobile & Web Apps"}
          description={"We&rsquo;ll research your product and start building."}
          imageSrc={"/specialize-img2.png"}
        />
        <Card
          title={"Mobile & Web Apps"}
          description={"We&rsquo;ll research your product and start building."}
          imageSrc={"/specialize-img1.png"}
        />
        <Card
          title={"Mobile & Web Apps"}
          description={"We&rsquo;ll research your product and start building."}
          imageSrc={"/specialize-img2.png"}
        />
        <Card
          title={"Mobile & Web Apps"}
          description={"We&rsquo;ll research your product and start building."}
          imageSrc={"/specialize-img1.png"}
        />
        <Card
          title={"Mobile & Web Apps"}
          description={"We&rsquo;ll research your product and start building."}
          imageSrc={"/specialize-img2.png"}
        />
      </div>
    </ContentWrapper>
  );
};

export default Specialize;
