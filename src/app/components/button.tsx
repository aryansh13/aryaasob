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
        className="flex bg-dark hover:bg-light-gray text-green-light font-bold py-4 px-7 rounded border border-green-light mt-8 button animate-fade-up animate-delay-500 animate-once"
    >
        {socials.map((social, index) => {
            const Icon = social.Icon;
        return (
                <Icon className="text-2xl mt-1 mr-3" key={index} aria-label={social.Label} />
        );
        })}
        <span className="text-2xl">Say hi!</span>
    </Link>
    );
}
