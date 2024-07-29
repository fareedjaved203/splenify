import Image from "next/image";
import React from "react";
import { ContentWrapper } from "../layouts/ContentWrapper";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full mt-10 md:mt-20 lg:mt-36 ">
        <div className="w-full hidden lg:block">
          <Image
            src={"/right-arrow.svg"}
            layout="responsive"
            width={10}
            height={10}
            alt="arrow"
            className="w-full h-[80px]"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="space-y-4 mt-12 whitespace-nowrap w-full max-w-[500px]">
            <p className="text-center text-base md:text-lg font-normal font-poppins w-full">
              and we go beyond just visuals…{" "}
            </p>
            <h1 className="text-[30px] md:text-[40px] lg:text-[46px] font-recoleta font-black w-full text-center">
              See our latest projects
            </h1>
          </div>
        </div>
        <div className="w-full hidden lg:block">
          <Image
            src={"/left-arrow.svg"}
            layout="responsive"
            width={10}
            height={10}
            alt="arrow"
            className="w-full h-[80px]"
          />
        </div>
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
