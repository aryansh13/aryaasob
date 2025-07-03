'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCalendar, FiChevronRight } from "react-icons/fi";

export default function Experience() {
    const [activeSection, setActiveSection] = useState("ECC.CO.ID");

    const sections = [
        { 
            id: "BRAINCORE", 
            name: "Braincore", 
            role: "Web Developer", 
            date: "Sept 2024 - Januari 2025", 
            details: [
                "Designed the entire website layout using Figma and fully implemented the Front-End (100%).",
                "Developed the complete Back-End, including database creation and system architecture (100%).",
                "Successfully integrated the Back-End with an LLM-based machine learning model to enhance system functionality (100%)."
            ] 
        },
        { 
            id: "ECC.CO.ID", 
            name: "Ecc.co.id", 
            role: "Full-Stack Developer", 
            date: "Feb 2024 - July 2024", 
            details: [
                "I added a new feature to the ecc.co.id website: an online personal assessment tool, specifically for potential mapping. I created a CRUD API so users can take the potential mapping test, and admins can add questions through the Backoffice Admin Dashboard.",
                "I also worked on the front end to create a design that's user-friendly and comfortable to use."
            ] 
        },
        { 
            id: "BTPN", 
            name: "INTECHFEST", 
            role: "Front-End Developer", 
            date: "Aug 2023 - Sept 2023", 
            details: [
                "In the Web Design Challenge at INTECHFEST, I need to create a website for an e-commerce T-shirt store called 'Otnay Design' using HTML, CSS, and JavaScript.",
                "As a front-end developer, my task is to design an engaging and user-friendly online store that showcases the T-shirts, facilitates easy navigation, and includes essential e-commerce features like product listings. This project is my opportunity to demonstrate my web development skills and creativity in a competitive setting."
            ] 
        },
        { 
            id: "CORE", 
            name: "Core Initiative", 
            role: "Front-End Developer", 
            date: "July 2023 - Aug 2023", 
            details: [
                "In a project-based learning experience organized by Rakamin Academy, I excelled in a project-based learning setting, completing all tasks assigned to me with a 100% success rate.",
                "In this role, I actively contributed to the design and implementation of various features, such as product listings, shopping cart functionality, and user authentication."
            ] 
        },
        { 
            id: "SILIR", 
            name: "Silir", 
            role: "Back-End Developer", 
            date: "Juni 2023 - July 2023", 
            details: [
                "In the project-based learning on campus 'SILIR' Tourism Parking Management, as a Back End Developer, I was tasked with pivotal responsibilities. Firstly, I was responsible for crafting RESTfull APIs utilizing the Slim framework, which involved designing endpoints, handling HTTP requests, and ensuring data transmission in a standardized manner.",
                "Second, I integrated the existing design with MySQL for database functionality. My work ensured smooth communication between the application and the database, making the parking management system efficient and reliable."
            ] 
        }
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section 
            id="experience" 
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
                    <h2 className="section-heading inline-block mx-auto">Work Experience</h2>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Tabs */}
                    <motion.div 
                        className="flex md:flex-col overflow-x-auto md:overflow-visible md:min-w-[200px] bg-dark-light/50 rounded-lg p-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`px-4 py-3 text-left whitespace-nowrap md:whitespace-normal rounded-md transition-all duration-300 ${
                                    activeSection === section.id
                                        ? "bg-dark-light text-primary border-l-4 border-primary"
                                        : "hover:bg-dark-light/80 text-light-gray"
                                }`}
                            >
                                {section.name}
                            </button>
                        ))}
                    </motion.div>

                    {/* Content */}
                    <motion.div 
                        className="flex-1 bg-dark-light/30 p-6 rounded-lg"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {sections
                            .filter((section) => section.id === activeSection)
                            .map((section) => (
                                <div key={section.id}>
                                    <motion.div variants={itemVariants} className="mb-4">
                                        <h3 className="text-2xl font-bold mb-1">
                                            {section.role} <span className="text-primary">@ {section.name}</span>
                                        </h3>
                                        <div className="flex items-center text-light-gray mb-6">
                                            <FiCalendar className="mr-2" />
                                            <span>{section.date}</span>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={containerVariants} className="space-y-4">
                                        {section.details.map((detail, index) => (
                                            <motion.div 
                                                key={index} 
                                                variants={itemVariants}
                                                className="flex"
                                            >
                                                <FiChevronRight className="flex-shrink-0 mt-1 text-secondary" />
                                                <p className="ml-3 text-light-gray">{detail}</p>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
