import React from "react";
import { BentoGrid , BentoGridItem} from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    (<BentoGrid className="max-w-6xl mx-auto md:auto-rows-[12rem] pt-24 px-[1rem]" >
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon} 
          classNameText={item.classNameText}/>
      ))}
    </BentoGrid>)
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent dark:border-white/[0.2] bg-black-100 dark:bg-black"></div>
);
const items = [
  {
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    header: <Skeleton />,
    className: "md:col-span-2 bg-BannerImg1 row-span-2 text-[1.3rem] sm:text-3xl sm:w-auto w-[100%]",
    icon: <IconClipboardCopy className="h-4 w-4 text-white-500" />,
  },
  {
    title: "I'm very flexible with time zone communications",
    description: "",
    header: <Skeleton />,
    className: "md:col-span-1 pb-4 w-[100%] sm:h-[auto] h-[100px] sm:w-[120%]",
    icon: <IconFileBroken className="h-4 w-4 text-white-500" />,
    classNameText: "text-center relative top-[-7rem] text-[1.3rem] sm:text-[1.7rem]",
  },
  {
    title: "My tech stack",
    description: "",
    header: <Skeleton />,
    className: "md:col-span-1 text-3xl w-[100%] sm:w-[120%]",
    icon: <IconSignature className="h-4 w-4 text-white-500" />,
    classNameText: " relative top-[-3rem] text-[1.7rem]",
  },
  
];
