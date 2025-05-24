"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FiArrowRight } from "react-icons/fi";

export default function Welcome() {
  const words = [
    {
      text: "Hello, ",
    },
    {
      text: "I'm ",
    },
    {
      text: "Arya",
      className: "text-primary font-bold",
    },
    {
      text: ".",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div id="home" className="flex flex-col items-center min-h-screen justify-center py-20 md:py-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <TypewriterEffectSmooth
          words={words}
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="px-4 sm:px-8 md:px-12 lg:px-24 max-w-4xl"
      >
        <motion.h2 
          variants={item}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-light-gray"
        >
          Fullstack Web Developer
        </motion.h2>
        
        <motion.p 
          variants={item}
          className="text-center text-lg sm:text-xl md:text-2xl text-light-gray mb-8"
        >
          I create modern web applications with clean, efficient code. 
          Specializing in building exceptional digital experiences that combine 
          stunning design with powerful functionality.
        </motion.p>

        <motion.div 
          variants={item}
          className="flex justify-center"
        >
          <a 
            href="#projects" 
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:translate-y-[-2px]"
          >
            See my work
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="w-6 h-10 border-2 border-light rounded-full flex justify-center pt-1">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-float" />
        </div>
      </motion.div>
    </div>
  );
}
