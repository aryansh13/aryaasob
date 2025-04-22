"use client";
import React from 'react';
import Button from "./button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function Welcome() {
  const words = [
    {
      text: "hi, ",
    },
    {
      text: "arya",
      className: "text-green-light dark:text-green-light font-bold",
    },
    {
      text: " here.",
    },
  ];

  return (
    <div id="home" className="flex flex-col items-center py-8 md:py-16 w-full">
      <div className="name-title mb-4">
        <TypewriterEffectSmooth
          words={words}
          className="type-effect text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-light"
        />
      </div>
      <div className="animate-fade-up animate-duration-1000 animate-delay-500 px-4 sm:px-8 md:px-12 lg:px-24 max-w-4xl">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl text-light-gray mb-4">
          I create stuff sometimes.
        </h1>
        <p className="text-center text-lg sm:text-xl md:text-2xl text-light-gray">
          I&apos;m a fullstack web developer from Brebes, Indonesia. I&apos;ve worked
          on various front-end projects, including user interfaces and web
          designs. Additionally, I have experience in developing back-end
          systems such as RESTful APIs, databases, and web microservices.
        </p>
      </div>
      <Button />
    </div>
  );
}
