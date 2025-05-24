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
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4,
            delay: idx * 0.1,
          }}
        >
          <div
            className="relative group block h-full w-full cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative h-full w-full rounded-xl overflow-hidden">
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-primary/10 block rounded-xl z-10"
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
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="p-2 bg-dark-light/50 rounded-xl">
                      {item.Icon2 && <item.Icon2 className="text-secondary text-xl" />}
                    </div>
                    <div>
                      {item.Icon1 && (
                        <Link 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-light-gray hover:text-primary transition-colors duration-300 inline-block"
                        >
                          <item.Icon1 className="text-xl" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <CardTitle>
                    <Link 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors duration-300"
                    >
                      {item.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                  {item.technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 text-xs rounded-full bg-dark-light/50 text-light-gray"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
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
        "rounded-xl h-full w-full bg-dark-light/30 border border-dark-light/50 overflow-hidden group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/5",
        className
      )}
    >
      <div className="relative h-full">
        <div className="p-6 h-full">{children}</div>
      </div>
    </div>
  );
};

export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("relative h-full flex flex-col", className)}>
      {children}
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
    <h4 className={cn("text-xl font-semibold mb-2 text-light group-hover:text-primary transition-colors duration-300", className)}>
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
        "text-light-gray text-sm flex-grow",
        className
      )}
    >
      {children}
    </p>
  );
};

