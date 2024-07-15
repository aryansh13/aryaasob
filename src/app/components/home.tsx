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
    <div id="home" className="main-text flex flex-col items-center p-4">
      <div className="name-title pb-0 mb-0 mx-11 mt-5">
        <TypewriterEffectSmooth
          words={words}
          className="type-effect text-center text-7xl text-light ml-4"
        />
      </div>
      <div className="pt-0 mt-0 animate-fade-up animate-duration-1000 animate-delay-500">
        <h1 className="text-center text-5xl text-light-gray">
          I create stuff sometimes.
        </h1>
        <p className="text-center text-2xl text-light-gray mx-40">
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
