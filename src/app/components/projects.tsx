"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { HoverEffect } from "./ui/card-hover-effect";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Movlix',
      description:
        "A streaming service with award-winning TV shows, movies, anime, documentaries, and more, available on thousands of devices.",
      link: "https://github.com/aryansh13/movlix",
      Icon1: FiGithub,
      Icon2: FiExternalLink,
      technologies: ["Next.js", "TailwindCSS"],
    },
    {
      title: "CRUD Students",
      description:
      "A student data website where you can add, edit, and delete student information easily.",
      link: "https://github.com/aryansh13/CRUD-Restfull-API",
      Icon1: FiGithub,
      Icon2: FiExternalLink,
      technologies: ["PHP", "HTML", "RESTful APIs", "JavaScript", "CSS", "Slim Framework", "MySQL"],
    },
    {
      title: "E-Commerce Web Otnay",
      description:
      "This site shows t-shirt designs with easy navigation and cool animations.",
      link: "https://github.com/aryansh13/E-CommerceWEB-OTNAY",
      Icon1: FiGithub,
      Icon2: FiExternalLink,
      technologies: ["HTML", "JavaScript", "CSS"],
    },
    {
      title: '"SILIR" E-Parking System',
      description:
      "This is a platform designed to simplify parking management and monitoring in various places like office buildings, shopping centers, or other public parking areas.",
      link: "https://github.com/aryansh13/Parkir-Api",
      Icon1: FiGithub,
      Icon2: FiExternalLink,
      technologies: ["PHP", "HTML", "RESTful APIs", "JavaScript", "SCSS", "Slim Framework", "MySQL"],
    },
    {
      title: "Library App",
      description:
        "An app to save your books. It uses web storage, so your data stays even if you close or refresh the browser, but deleting it manually removes it permanently.",
      link: "https://github.com/aryansh13/Library-Apps",
      Icon1: FiGithub,
      Icon2: FiExternalLink,
      technologies: ["HTML", "JavaScript", "CSS"],
    },
    {
      title: 'Book Rental Web',
      description:
      "This book rental website allows users to borrow multiple books at once. Users can borrow the entire collection. Admins can add books for borrowing and track borrowers.",
      link: "https://github.com/aryansh13/laravel-sewaBuku",
      Icon1: FiGithub,
      Icon2: FiExternalLink,
      technologies: ["Laravel", "PHP", "HTML", "JavaScript", "Bootstrap", "MySQL"],
    },
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-heading inline-block mx-auto">Featured Projects</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HoverEffect items={projects} />
        </motion.div>
      </div>
    </section>
  );
}
