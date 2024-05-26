"use client"
import React from 'react';
import { HoverEffect } from "./ui/card-hover-effect";
import { SiGithub, SiLinkedin, SiCarrd } from "react-icons/si";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const projects = [
    {
      title: 'Movlix',
      description:
        "A streaming service with award-winning TV shows, movies, anime, documentaries, and more, available on thousands of devices.",
      link: "https://github.com/aryansh13/movlix",
      Icon1: SiGithub,
      Icon2: SiCarrd,
      technologies: ["NEXT.Js", "Tailwind"],
    },
    {
      title: "CRUD Students",
      description:
      "A student data website where you can add, edit, and delete student information easily.",
      link: "https://github.com/aryansh13/CRUD-Restfull-API",
      Icon1: SiGithub,
      Icon2: SiCarrd,
      technologies: ["PHP", "HTML", "RESTfull APIs", "Javascript", "CSS", "Slim Framework", "MySql"],
    },
    {
      title: "E-Commerce Web Otnay",
      description:
      "This site shows t-shirt designs with easy navigation and cool animations.",
      link: "https://github.com/aryansh13/E-CommerceWEB-OTNAY",
      Icon1: SiGithub,
      Icon2: SiCarrd,
      technologies: ["HTML", "Javascript", "CSS"],
    },
    {
      title: '"SILIR" E-Parking System Management',
      description:
      "This is a platform designed to simplify parking management and monitoring in various places like office buildings, shopping centers, or other public parking areas.",
      link: "https://github.com/aryansh13/Parkir-Api",
      Icon1: SiGithub,
      Icon2: SiCarrd,
      technologies: ["PHP", "HTML", "RESTfull APIs", "Javascript", "SCSS", "Slim Framework", "MySql"],
    },
    {
      title: "Library App",
      description:
        "An app to save your books. It uses web storage, so your data stays even if you close or refresh the browser, but deleting it manually removes it permanently.",
      link: "https://github.com/aryansh13/Library-Apps",
      Icon1: SiGithub,
      Icon2: SiCarrd,
      technologies: ["HTML", "Javascript", "CSS"],
    },
    {
      title: 'Book Rental Web',
      description:
      "This book rental website allows users to borrow multiple books at once. Users can borrow the entire collection. Admins can add books for borrowing and track borrowers.",
      link: "https://github.com/aryansh13/laravel-sewaBuku",
      Icon1: SiGithub,
      Icon2: SiCarrd,
      technologies: ["Laravel", "PHP", "HTML", "Javascript", "Bootstrap", "MySql"],
    },
  ];

  const { ref: ProjectsRef, inView: ProjectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    });
  return (
    <div id="projects" ref={ProjectsRef} className={`projects-section flex flex-col p-4 mt-6 ml-20 ${ProjectsInView ? "animate-fade-up animate-duration-1500" : "opacity-0"}`}>
        <div className="flex mt-8">
            <h1 className="text-5xl text-light font-bold">/ pet projects</h1>
            <span className="lines w-1/4 ml-6 border-t-2 border-dark-gray mt-11"></span>
        </div>
        <HoverEffect items={projects} />
    </div>
  )
}
