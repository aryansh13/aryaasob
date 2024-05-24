import React from "react";
import Image from "next/image";
/* eslint-enable react/no-unescaped-entities */

export default function about() {
  return (
    <div id="about" className="about-section flex flex-col p-4 mt-5 ml-20">
      <div className="flex mt-8">
        <h1 className="text-5xl text-light font-bold">/ about me</h1>
        <span className="lines w-1/4 ml-6 border-t-2 border-dark-gray mt-11"></span>
      </div>
      <div className="grid grid-cols-2 gap-0 mt-4 about-main">
        <div className="text-2xl text-justify text-light-gray">
          <p>
            I&apos;m currently a
            <span className="font-bold"> FullStack Developer Intern </span>
            at {" "}
            <span className="text-green-light font-bold">
              PT. Baracipta Esa Engineering
            </span>
            , working with the Ecc.co.id team as part of the campus internship
            program called
            <span className="font-bold"> MSIB Batch 6 2024</span>. At the same
            time, I&apos;m pursuing a
            <span className="font-bold"> Bachelor&apos;s Degree </span> in
            <span className="font-bold">Computer Engineering Technology</span> {" "}
            at {" "}
            <span className="text-green-light font-bold">
              Semarang State Polytechnic
            </span>
            .
          </p>
          <div className="mt-6">
            <p className="title-technologies">
              Here are some technologies I have been working with:
            </p>
            <div className="grid grid-cols-3 mt-3 technology-list">
              <ul className="list-none text-lg">
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
              <ul className="list-none text-lg">
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
              <ul className="list-none text-lg">
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
        <div className="pl-16 mt-2 rounded-sm relative about-image">
          <Image
            className="transition-transform duration-100 ease-in-out transform-gpu hover:-translate-y-1 rounded-2xl cursor-pointer overflow-hidden"
            style={{ width: "auto", height: "auto" }}
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
/* eslint-enable react/no-unescaped-entities */
