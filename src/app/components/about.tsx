"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiDatabase, FiServer } from "react-icons/fi";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    {
      category: "Frontend",
      icon: <FiCode className="text-2xl text-primary" />,
      skills: ["TypeScript", "JavaScript", "React.js", "Next.js", "TailwindCSS"]
    },
    {
      category: "Backend",
      icon: <FiServer className="text-2xl text-primary" />,
      skills: ["PHP", "Laravel", "Node.js", "Express.js", "RESTful APIs"]
    },
    {
      category: "Database",
      icon: <FiDatabase className="text-2xl text-primary" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Git"]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="section-heading inline-block mx-auto">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-light-gray"
          >
            <p className="mb-6">
              I&apos;m currently a
              <span className="font-semibold text-light"> FullStack Developer Intern </span>
              at{" "}
              <span className="text-secondary font-semibold">
                PT. Baracipta Esa Engineering
              </span>
              , working with the Ecc.co.id team as part of the campus internship
              program called
              <span className="font-semibold text-light"> MSIB Batch 6 2024</span>. 
            </p>
            <p className="mb-6">
              At the same time, I&apos;m pursuing a
              <span className="font-semibold text-light"> Bachelor&apos;s Degree </span> in{" "}
              <span className="font-semibold text-light">Computer Engineering Technology</span>{" "}
              at{" "}
              <span className="text-secondary font-semibold">
                Semarang State Polytechnic
              </span>.
            </p>

            <div className="mt-10 space-y-6">
              <h3 className="text-xl font-semibold mb-4">Technologies I work with:</h3>
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="bg-dark-light p-4 rounded-lg shadow-md"
                  >
                    <div className="flex items-center mb-3">
                      {tech.icon}
                      <h4 className="text-lg font-medium ml-2">{tech.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tech.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-dark rounded-full text-sm text-light-gray">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl transform -rotate-3"></div>
              <div className="relative overflow-hidden rounded-2xl border-4 border-dark-light bg-dark-light shadow-xl">
                <Image
                  className="transition-all duration-500 ease-in-out hover:scale-105"
                  width={400}
                  height={400}
                  src="/assets/about-me.jpeg"
                  alt="Arya As"
                  priority={true}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
