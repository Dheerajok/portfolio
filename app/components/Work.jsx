"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Link from "next/link";

export function AnimatedPinDemo({heading,desc,img}) {
  return (
    <div className="h-[25%] sm:h-[50%] w-[50%] flex items-center justify-center ">
  
      <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
        <div
          className="flex basis-full flex-col p-3 tracking-tight text-slate-100/50 sm:basis-1/2 sm:w-[40rem] h-[30rem] w-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              {desc}
            </span>
          </div>
          <div
            className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
<img src={img} alt="projectImg" />

            </div>
          
        </div>
      </PinContainer>
      
    </div>
  );
}
