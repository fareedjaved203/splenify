import React from "react";
import Image from "next/image";
import { ContentWrapper } from "../layouts/ContentWrapper";
import Card from "./Card";

const Specialize = () => {
  return (
    <ContentWrapper
      className={`flex justify-center items-center mt-36 flex-col font-poppins`}
    >
      <div className="space-y-4">
        <p className="text-center text-lg font-normal">
          What do we specialize in?
        </p>
        <h1 className="text-[46px] font-recoleta text-center">
          Our partners hire us to{" "}
          <span className="text-[#7165FF]">design &amp; develop</span> their…
        </h1>
      </div>
      <div className="mt-[55px] grid grid-cols-1 md:grid-cols-2 gap-[44px] ">
        <Card
          title={"Mobile & Web Apps"}
          description={"We&rsquo;ll research your product and start building."}
          imageSrc={"/specialize1.svg"}
        />
        <Card
          title={"Mobile & Web Apps"}
          description={"We&rsquo;ll research your product and start building."}
          imageSrc={"/specialize1.svg"}
        />
        <Card
          title={"Mobile & Web Apps"}
          description={"We&rsquo;ll research your product and start building."}
          imageSrc={"/specialize1.svg"}
        />
        <Card
          title={"Mobile & Web Apps"}
          description={"We&rsquo;ll research your product and start building."}
          imageSrc={"/specialize1.svg"}
        />
        <Card
          title={"Mobile & Web Apps"}
          description={"We&rsquo;ll research your product and start building."}
          imageSrc={"/specialize1.svg"}
        />
        <Card
          title={"Mobile & Web Apps"}
          description={"We&rsquo;ll research your product and start building."}
          imageSrc={"/specialize1.svg"}
        />
      </div>
    </ContentWrapper>
  );
};

export default Specialize;
