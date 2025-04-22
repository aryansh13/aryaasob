"use client";
import Link from "next/link";
import { SiMinutemailer } from "react-icons/si";
import React from "react";

export default function button() {
    const socials = [
        {
        Link: "mailto:akunto21@gmail.com",
        Label: "Email",
        Icon: SiMinutemailer,
        },
    ];

return (
    <Link
        href={"mailto:akunto21@gmail.com"}
        className="flex items-center bg-dark hover:bg-light-gray text-green-light font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-7 rounded border border-green-light mt-6 md:mt-8 button animate-fade-up animate-delay-500 animate-once"
    >
        {socials.map((social, index) => {
            const Icon = social.Icon;
        return (
                <Icon className="text-xl sm:text-2xl mr-2 sm:mr-3" key={index} aria-label={social.Label} />
        );
        })}
        <span className="text-lg sm:text-xl md:text-2xl">Say hi!</span>
    </Link>
    );
}
