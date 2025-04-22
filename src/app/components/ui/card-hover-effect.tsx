import { cn } from "@/app/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    technologies?: string[];
    Icon1?: React.ElementType;
    Icon2?: React.ElementType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "card-project grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 sm:py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-green-light/[0.2] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
              <div className="card-icon flex text-xl sm:text-2xl -mt-2 justify-between">
                <div className="text-green-light">
                  {item.Icon2 && <item.Icon2 />}
                </div>
                <div>
                  {item.Icon1 && <item.Icon1/>}
                </div>
              </div>
              <hr className="mt-3 border-gray-700" />
              <CardTitle className="mt-4 sm:mt-8">{item.title}</CardTitle>
            <CardDescription className="mt-2">{item.description}</CardDescription>
            {item.technologies && (
              <div className="card-techno mt-4 sm:mt-8 text-xs sm:text-sm text-light-gray">
                 {item.technologies.join(", ")} 
              </div>
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "card-shape rounded-2xl h-full w-full p-3 sm:p-4 overflow-hidden bg-gray-dark border border-transparent group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2 sm:p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("card-title text-light text-xl sm:text-2xl font-bold tracking-wide mt-2 sm:mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "card-desc mt-2 sm:mt-4 text-light-gray text-sm sm:text-base tracking-wide leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};
