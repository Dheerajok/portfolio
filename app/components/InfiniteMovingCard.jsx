"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    (<div id="testimonials"
      className="h-[35rem] sm:h-[30rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                 <h2 className="text-5xl text font-bold text-center m-auto  py-14">Kind words from <span className="text-purple-300">satisfied clients</span></h2>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>)
  );
}

const testimonials = [
  {
    quote:
      "Dheeraj helped me manage my second channel’s meme reaction content brilliantly and generated millions of views. His dedication and smart content strategies made a huge impact on my audience engagement.",
    name: "Total Gaming",
    title: "YouTuber",
  },
  {
    quote:
      "Working with Dheeraj was smooth and result-driven. He created a professional website for our agency that matched our vision perfectly and boosted our online presence.",
    name: "Ayush",
    title: "Agency Owner",
  },
  {
    quote:
      "Dheeraj played a key role in connecting Unique Hype Media with some of India’s top YouTubers and Instagram influencers. His network and communication skills helped us scale our campaigns faster than ever.",
    name: "Unique Hype Media",
    title: "Agency",
  },
  {
    quote:
      "Dheeraj designed a beautiful and functional digital menu website for our cafe. It helped us provide a better experience to our customers and grow our brand online.",
    name: "FoodWithLove Cafe",
    title: "Cafe",
  },
  {
    quote:
      "Dheeraj’s editing skills really elevated my channel’s short videos. His quick turnaround and creative touch helped me keep my audience entertained and engaged.",
    name: "Archit Verma",
    title: "YouTuber",
  },
];

