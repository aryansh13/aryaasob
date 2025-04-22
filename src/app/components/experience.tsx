'use client'
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Experience() {
    const [activeSection, setActiveSection] = useState("ECC.CO.ID");

    const sections = [
        { id: "ECC.CO.ID", name: "Ecc.co.id", content: "Full-Stack Developer @ ", date: "Feb 2024 - July 2024", details: [
            "I added a new feature to the ecc.co.id website: an online personal assessment tool, specifically for potential mapping. I created a CRUD API so users can take the potential mapping test, and admins can add questions through the Backoffice Admin Dashboard.",
            "I also worked on the front end to create a design that's user-friendly and comfortable to use."
        ] },
        { id: "BTPN", name: "INTECHFEST", content: "Front-End Developer @", date: "Aug 2023 - Sept 2023", details: [
            "In the Web Design Challenge at INTECHFEST, I need to create a website for an e-commerce T-shirt store called 'Otnay Design' using HTML, CSS, and JavaScript.",
            "As a front-end developer, my task is to design an engaging and user-friendly online store that showcases the T-shirts, facilitates easy navigation, and includes essential e-commerce features like product listings. This project is my opportunity to demonstrate my web development skills and creativity in a competitive setting."
        ] },
        { id: "CORE", name: "Core Initiative", content: "Front-End Developer @", date: "July 2023 - Aug 2023", details: [
            "In a project-based learning experience organized by Rakamin Academy, I excelled in a project-based learning setting, completing all tasks assigned to me with a 100% success rate.",
            "In this role, I actively contributed to the design and implementation of various features, such as product listings, shopping cart functionality, and user authentication."
        ] },
        { id: "SILIR", name: "Silir", content: "Back-End Developer @", date: "Juni 2023 - July 2023", details: [
            "In the project-based learning on campus 'SILIR' Tourism Parking Management, as a Back End Developer, I was tasked with pivotal responsibilities. Firstly, I was responsible for crafting RESTfull APIs utilizing the Slim framework, which involved designing endpoints, handling HTTP requests, and ensuring data transmission in a standardized manner.",
            "Second, I integrated the existing design with MySQL for database functionality. My work ensured smooth communication between the application and the database, making the parking management system efficient and reliable."
        ] }
    ];

    const { ref: experienceRef, inView: experienceInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        });

    return (
        <div id="experience" ref={experienceRef} className={`experience-section flex flex-col p-4 my-12 md:my-20 ${
            experienceInView ? "animate-fade-up animate-duration-1500" : "opacity-0"
          }`}>
            <div className="flex flex-wrap items-center mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-light font-bold">/ experience</h1>
                <span className="lines hidden md:block w-1/4 ml-6 border-t-2 border-dark-gray mt-4"></span>
            </div>
            <div className="flex flex-col md:flex-row mt-6 md:mt-12 side-bar">
                <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible text-light-gray side-name mb-6 md:mb-0">
                    {sections.map((section, index) => (
                        <div
                            key={section.id}
                            className={`square-section p-2 md:p-3 cursor-pointer transition duration-600 whitespace-nowrap md:whitespace-normal text-sm sm:text-base ${
                                activeSection === section.id ? 
                                "border-b-2 md:border-b-0 md:border-r-2 text-green-light border-green-light" : 
                                "text-light-gray"
                            }`}
                            onClick={() => setActiveSection(section.id)}
                            data-number={index + 1}
                        >
                            <span className="uppercase">{section.name}</span>
                        </div>
                    ))}
                </div>
                <div className="md:ml-8 lg:ml-14 experience-details">
                    {sections
                        .filter((section) => section.id === activeSection)
                        .map((section) => (
                            <div key={section.id} className="mt-2 md:mt-0">
                                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                                    {section.content}{" "}
                                    <span className="text-green-light">{section.name}</span>
                                </h1>
                                <span className="block text-light-gray text-sm sm:text-base md:text-lg uppercase date-range mb-4">{section.date}</span>
                                {section.details.map((detail, index) => (
                                    <div key={index} className="mt-3 md:mt-5 flex flex-row">
                                        <span className="text-green-light mt-0.5 hidden md:block">▹</span>
                                        <p className={`text-light-gray md:ml-4 mr-4 md:mr-8 text-sm sm:text-base md:text-lg details ${experienceInView ? 'animate-fade-up animate-duration-2000 animate-delay-2500' : 'opacity-0'} `}>{detail}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
