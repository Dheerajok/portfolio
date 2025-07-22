"use client";

import React from "react";
import {Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Content Manager",
    title: "Total Gaming",
    src: "https://res.cloudinary.com/djqya1k8g/image/upload/v1753199504/Untitled_design_3_lpr7g9.png",
    content: <DummyContent />,
  },
  {
    category: "Video Editor",
    title: "Archit Verma",
    src: "https://res.cloudinary.com/djqya1k8g/image/upload/v1753201204/Untitled_design_4_teaptn.png",
    content: <DummyContent />,
  },{
    category: "Video Editor",
    title: "Ajey Arora",
    src: "https://res.cloudinary.com/djqya1k8g/image/upload/v1753201765/Untitled_design_6_acxyil.png",
    content: <DummyContent />,
  },
  {
    category: "Web Developer",
    title: "FoodwithLove",
    src: "https://res.cloudinary.com/djqya1k8g/image/upload/v1753202319/Untitled_design_9_kg8opu.png",
    content: <DummyContent />,
  },

  {
    category: "Video Editor",
    title: "Modern Industries",
    src: "https://res.cloudinary.com/djqya1k8g/image/upload/v1753202172/Untitled_design_8_xoe7d3.png",
    content: <DummyContent />,
  },
  {
    category: "Web Developer",
    title: "Unique Hype Media",
    src: "https://res.cloudinary.com/djqya1k8g/image/upload/v1753202713/Untitled_design_10_oxpw0l.png",
    content: <DummyContent />,
  },
  
];
