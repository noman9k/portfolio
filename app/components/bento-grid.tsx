"use Client";
import { cn } from "../lib/utils/cn";
import { Card } from "./card";
import Link from "next/link";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[10rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  bottom,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  bottom?: React.ReactNode;
  link ?: string | React.ReactNode;
}) => {
  return (
  
    <div
      className={cn(
        "row-span-2  rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >  
  

       <Link
        key={title as string}
        href={link as string} >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 ">
        <div className=" font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className=" relative line-clamp-2 font-normal text-neutral-600 text-xs dark:text-neutral-300  w-auto">
         
          {description}
        </div>
        {bottom}
      </div>
      </Link>

    </div>
  );
};



/*
 <Card>
          
        <BentoGrid className="max-w-4xl mx-auto">
      {appP.map((item, i) => (
        <BentoGridItem
        key={i}
        title={item.title}
        description={item.description}
        header={<Image src={item.mainImage} alt={item.title} width={100} height={10} />}
        // icon={item.icon}
        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
        )
        )
        }
    </BentoGrid>
      </Card>
*/