import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div id={"projects"}
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  classNameText,
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-black border border-li justify-between flex flex-col space-y-4 bg-cover bg-center bg-no-repeat",
        className
      )}>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        
        <div className={cn(
        "font-sans font-bold text-white-600 dark:text-white-200 mb-2 mt-2 max-w-96 px-4",
        classNameText
      )}>
          {title}
        </div>
        <div
          className="font-sans font-normal text-white-600 text-xs dark:text-neutral-300 px-4 pb-4">
          {description}
        </div>
      </div>
    </div>)
  );
};
