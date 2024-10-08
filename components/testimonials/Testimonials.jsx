import React from "react";
import { ContentWrapper } from "../layouts/ContentWrapper";
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <ContentWrapper
      className={`flex justify-center items-center flex-col mt-28 w-full`}
    >
      <div className="space-y-4 w-full">
        <p className="text-center text-base md:text-lg font-normal">
          Don&apos;t take our word for it!
        </p>
        <div className="flex md:space-x-4 w-full justify-center items-center whitespace-nowrap">
          <Image
            src={"/left-leaf.svg"}
            width={10}
            height={10}
            alt="leaf"
            className="w-[40px] h-[70px] md:w-[55px] md:h-[84px] dark:hidden block"
          />
          <Image
            src={"/left-leaf-darkmode.svg"}
            width={10}
            height={10}
            alt="leaf"
            className="w-[30px] h-[60px] md:w-[45px] md:h-[74px] dark:block hidden"
          />
          <h1 className="text-[27px] md:text-[40px] lg:text-[46px] font-recoleta font-black text-center mt-2">
            Hear it from our <span className="text-[#7165FF]">clients</span>
          </h1>
          <Image
            src={"/right-leaf.svg"}
            width={10}
            height={10}
            alt="leaf"
            className="w-[40px] h-[70px] md:w-[55px] md:h-[84px] dark:hidden block"
          />
          <Image
            src={"/right-leaf-darkmode.svg"}
            width={10}
            height={10}
            alt="leaf"
            className="w-[30px] h-[60px] md:w-[45px] md:h-[74px] dark:block hidden"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div className="flex flex-col space-y-10">
          <TestimonialCard
            logo={"/testimonial-logo1.svg"}
            userImage={"/testimonial-user1.svg"}
            profileImage={"/testimonial-user-profile.svg"}
            name={"Ruslan Babar"}
            role={"Co-Founder of RecruitU"}
            review="&quot;Working with Raja and Splenify has been incredible. They &lt;span class='font-bold'&gt;quickly grasped our business model&lt;/span&gt;, transforming our landing page and creating stellar social media assets, pitch decks, and more. &lt;span class='font-bold'&gt;Their versatility and expertise are unmatched&lt;/span&gt;.&quot;"
          />
          <TestimonialCard
            logo={"/testimonial-logo2.svg"}
            profileImage={"/testimonial-user-profile.svg"}
            name={"Ruslan Babar"}
            role={"Co-Founder of RecruitU"}
            review="&quot;Working with Raja and Splenify has been incredible. They &lt;span class='font-bold'&gt;quickly grasped our business model&lt;/span&gt;, transforming our landing page and creating stellar social media assets, pitch decks, and more. &lt;span class='font-bold'&gt;Their versatility and expertise are unmatched&lt;/span&gt;.&quot;"
          />
        </div>
        <div className="flex flex-col space-y-10">
          <TestimonialCard
            logo={"/testimonial-logo2.svg"}
            profileImage={"/testimonial-user-profile.svg"}
            name={"Ruslan Babar"}
            role={"Co-Founder of RecruitU"}
            review="&quot;Working with Raja and Splenify has been incredible. They &lt;span class='font-bold'&gt;quickly grasped our business model&lt;/span&gt;, transforming our landing page and creating stellar social media assets, pitch decks, and more. &lt;span class='font-bold'&gt;Their versatility and expertise are unmatched&lt;/span&gt;.&quot;"
          />
          <TestimonialCard
            logo={"/testimonial-logo3.svg"}
            userImage={"/testimonial-user2.svg"}
            profileImage={"/testimonial-user-profile.svg"}
            name={"Ruslan Babar"}
            role={"Co-Founder of RecruitU"}
            review="&quot;Working with Raja and Splenify has been incredible. They &lt;span class='font-bold'&gt;quickly grasped our business model&lt;/span&gt;, transforming our landing page and creating stellar social media assets, pitch decks, and more. &lt;span class='font-bold'&gt;Their versatility and expertise are unmatched&lt;/span&gt;.&quot;"
          />
        </div>
        <div className="flex flex-col space-y-10">
          <TestimonialCard
            logo={"/testimonial-logo4.svg"}
            profileImage={"/testimonial-user-profile.svg"}
            name={"Ruslan Babar"}
            role={"Co-Founder of RecruitU"}
            review="&quot;Working with Raja and Splenify has been incredible. They &lt;span class='font-bold'&gt;quickly grasped our business model&lt;/span&gt;, transforming our landing page and creating stellar social media assets, pitch decks, and more. &lt;span class='font-bold'&gt;Their versatility and expertise are unmatched&lt;/span&gt;.&quot;"
          />
          <TestimonialCard
            logo="/testimonial-logo1.svg"
            userImage="/testimonial-user3.svg"
            profileImage="/testimonial-user-profile.svg"
            name="Ruslan Babar"
            role="Co-Founder of RecruitU"
            review="&quot;Working with Raja and Splenify has been incredible. They &lt;span class='font-bold'&gt;quickly grasped our business model&lt;/span&gt;, transforming our landing page and creating stellar social media assets, pitch decks, and more. &lt;span class='font-bold'&gt;Their versatility and expertise are unmatched&lt;/span&gt;.&quot;"
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Testimonials;
