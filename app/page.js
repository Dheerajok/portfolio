"use client";
import React, { useState } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { BentoGridSecondDemo } from "./components/GridInfo";
import Hero from "./components/Hero";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCard";
import { FloatingNavDemo } from "./components/Navbar";
import { AnimatedPinDemo } from "./components/Work";
import Footer from "./components/Footer";
import { CanvasRevealEffectDemo } from "./components/Approch";
import { AppleCardsCarouselDemo } from "./components/Expirence";

export default function Home() {


  return (

    <>

      <div className=" bg-black text-white w-full">

        {/* navbar  */}
        <FloatingNavDemo />


        {/*  first front page of portfolio */}
        <Hero />

        {/*work content grid*/}
        <BentoGridSecondDemo />

        {/* work & projects image grid */}
        {/* <div className="h-screen w-full">
          <LayoutGrid cards={cards} />
        </div> */}


        {/* work content */}



        <div className="container m-auto sm:flex flex-wrap px-6 h-[400vh] sm:h-[180vh] block pt-20">
          <h2 className="text-5xl text font-bold text-center m-auto  py-5">A small selection of <span className="text-purple-300">recent projects</span></h2>
          <AnimatedPinDemo heading="Social Media Management" desc="Helped businesses & Content Creators in social media." img="https://res.cloudinary.com/djqya1k8g/image/upload/v1753191227/Best_AWM_and_M82B_OverPower_Ajjubhai_Gameplay_with_Jontybhai_-_Garena_Free_Fire_1_viy5tc.png" />

          <AnimatedPinDemo heading="Website Development" desc="Created website for the company to enhence online presence." img="https://res.cloudinary.com/djqya1k8g/image/upload/v1753191893/Screenshot_2025-07-22_190957_nxphio.png"/>

          <AnimatedPinDemo heading="Video Editor" desc="Edited videos according to client requirement." img="https://res.cloudinary.com/djqya1k8g/image/upload/v1753192508/Screenshot_2025-07-22_192424_jmoonl.png" />

          <AnimatedPinDemo heading="Influencer Marketing" desc="Connected to Top Indian Influencers in diffrent categorys." img="https://res.cloudinary.com/djqya1k8g/image/upload/v1753192820/Screenshot_2025-07-22_192952_vpbixa.png" />



        </div>


        <div className="container m-auto flex flex-wrap px-6 pt-52 w-full justify-center h-[120vh]">


          {/* infinite moving card */}
          <InfiniteMovingCardsDemo />

        </div>




        <div className="container m-auto flex flex-wrap w-full justify-center h-[100vh] sm:h-[125vh]">
          <h2 className="text-5xl text font-bold text-center m-auto  pt-28">My <span className="text-purple-300">work experience</span></h2>

          <AppleCardsCarouselDemo />

        </div>




        <div className="container m-auto flex flex-wrap w-full justify-center">
          <h2 className="text-5xl text font-bold text-center m-auto  py-10">My <span className="text-purple-300">approach</span></h2>



          <CanvasRevealEffectDemo />


        </div>


        {/* service */}



        {/* footer */}
        <Footer />










      </div>



    </>

  );
}

const SkeletonOne = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>)
  );
};

const SkeletonTwo = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>)
  );
};
const SkeletonThree = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>)
  );
};
const SkeletonFour = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>)
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/djqya1k8g/image/upload/v1753122800/Best_AWM_and_M82B_OverPower_Ajjubhai_Gameplay_with_Jontybhai_-_Garena_Free_Fire_4_g3arde.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://res.cloudinary.com/djqya1k8g/image/upload/v1753123506/Screenshot_2025-07-22_001431_tpwtfz.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://res.cloudinary.com/djqya1k8g/image/upload/v1753123676/Screenshot_2025-07-22_001736_zac8ub.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/djqya1k8g/image/upload/v1753123676/Screenshot_2025-07-22_001736_zac8ub.png",
  },
];
