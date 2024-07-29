import Image from "next/image";
import React from "react";
import { ContentWrapper } from "../layouts/ContentWrapper";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full mt-10 md:mt-20 lg:mt-36">
        <Image
          src={"/right-arrow.svg"}
          width={10}
          height={10}
          alt="arrow"
          className="lg:w-[360px] lg:h-[85px] xl:w-[400px] xl:h-[90px] 2xl:w-[460px] 2xl:h-[106.32px]"
        />
        <div className="space-y-4 mt-12">
          <p className="text-center text-lg font-normal font-poppins">
            and we go beyond just visuals…{" "}
          </p>
          <h1 className="md:text-[40px] lg:text-[46px] font-recoleta font-black text-center">
            See our latest projects
          </h1>
        </div>
        <Image
          src={"/left-arrow.svg"}
          width={10}
          height={10}
          alt="arrow"
          className="lg:w-[360px] lg:h-[85px] xl:w-[400px] xl:h-[90px] 2xl:w-[460px] 2xl:h-[106.32px]"
        />
      </div>
      <ContentWrapper className={"mt-[84px]"}>
        <div className="xl:mx-10 flex justify-center items-center flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[76px]">
            <div className="flex flex-col space-y-[85px]">
              <ProjectCard
                title={"Mobile Application"}
                description={"Aura IOS | Android"}
                imageSrc={"/project1.svg"}
                height={"584px"}
              />
              <ProjectCard
                title={"Web Development"}
                description={"Gradient Website Development"}
                imageSrc={"/project3.svg"}
                height={"374.58px"}
              />
            </div>
            <div className="flex flex-col space-y-[89px]">
              <ProjectCard
                title={"Video Animation"}
                description={"AB.S Snack Animation"}
                imageSrc={"/project2.svg"}
                height={"370.24px"}
              />

              <ProjectCard
                title={"Full Stack Web Development"}
                description={"Dashboard Teamify"}
                imageSrc={"/project4.svg"}
                height={"584.6px"}
              />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default Projects;
