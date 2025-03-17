"use client";
import React from "react";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconUser className="h-4 w-4 text-white-500 dark:text-white" />,
    },
    {
      name: "Testimonials",
      link: "#testimonials",
      icon: (
        <IconMessage className="h-4 w-4 text-white-500 dark:text-white" />
      ),
    },{
        name: "Contact",
        link: "#contact",
        icon: (
          <IconMessage className="h-4 w-4 text-white-500 dark:text-white" />
        ),
      }
  ];
  return (
    (<div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>)
  );
}
const DummyContent = () => {
  return (
    (<div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />)
  );
};
