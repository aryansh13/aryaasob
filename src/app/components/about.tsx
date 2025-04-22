"use client"
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="about"
      ref={aboutRef}
      className={`about-section flex flex-col p-4 my-12 md:my-20 ${
        aboutInView ? "animate-fade-up animate-duration-1000" : "opacity-0"
      }`}
    >
      <div className="flex flex-wrap items-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-light font-bold">/ about me</h1>
        <span className="lines hidden md:block w-1/4 ml-6 border-t-2 border-dark-gray mt-4"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 about-main">
        <div className="text-lg sm:text-xl md:text-2xl text-justify text-light-gray">
          <p>
            I&apos;m currently a
            <span className="font-bold"> FullStack Developer Intern </span>
            at{" "}
            <span className="text-green-light font-bold">
              PT. Baracipta Esa Engineering
            </span>
            , working with the Ecc.co.id team as part of the campus internship
            program called
            <span className="font-bold"> MSIB Batch 6 2024</span>. At the same
            time, I&apos;m pursuing a
            <span className="font-bold"> Bachelor&apos;s Degree </span> in{" "}
            <span className="font-bold">Computer Engineering Technology</span>{" "}
            at{" "}
            <span className="text-green-light font-bold">
              Semarang State Polytechnic
            </span>
            .
          </p>
          <div className="mt-6">
            <p className="title-technologies">
              Here are some technologies I have been working with:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 technology-list">
              <ul className={`list-none text-base sm:text-lg ${aboutInView ? 'animate-fade-up animate-duration-1000 animate-delay-2000' : 'opacity-0'}`}>
                <li>
                  <span className="text-green-light">▹</span> Typescript
                </li>
                <li>
                  <span className="text-green-light">▹</span> Javascript
                </li>
                <li>
                  <span className="text-green-light">▹</span> Next.Js
                </li>
              </ul>
              <ul className={`list-none text-base sm:text-lg ${aboutInView ? 'animate-fade-up animate-duration-1000 animate-delay-1000' : 'opacity-0'}`}>
                <li>
                  <span className="text-green-light">▹</span> PHP
                </li>
                <li>
                  <span className="text-green-light">▹</span> Laravel
                </li>
                <li>
                  <span className="text-green-light">▹</span> React.Js
                </li>
              </ul>
              <ul className={`list-none text-base sm:text-lg ${aboutInView ? 'animate-fade-up animate-duration-1000 animate-delay-1000' : 'opacity-0'}`}>
                <li>
                  <span className="text-green-light">▹</span> MySql
                </li>
                <li>
                  <span className="text-green-light">▹</span> PostgreSql
                </li>
                <li>
                  <span className="text-green-light">▹</span> Git
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 flex justify-center md:pl-8 about-image">
          <Image
            className="transition-transform duration-100 ease-in-out transform-gpu hover:-translate-y-1 rounded-2xl cursor-pointer overflow-hidden"
            style={{ width: "auto", height: "auto", maxWidth: "100%" }}
            width={300}
            height={250}
            src="/assets/about-me.jpeg"
            alt="ini saya"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
