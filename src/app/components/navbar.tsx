"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SiMinutemailer, SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Label } from '@headlessui/react';

export default function Navbar() {

  const socials = [
    {
      Link: "mailto:akunto21@gmail.com",
      Label: "Email",
      Icon: SiMinutemailer,
    },
    {
      Link: "https://github.com/aryansh13",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: "https://www.linkedin.com/in/aryanto-as/",
      Label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      Link: "https://www.instagram.com/aryaasob/",
      Label: "Instagram",
      Icon: SiInstagram,
    },
  ]

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar sticky top-0 flex px-5 py-1 items-center z-[100] ${isScrolled ? 'shadow-md' : ''} transition-shadow bg-dark`}>
      <div className="flex font-bold ml-6 p-2 navbar-section">
        <Link className="text-xl ml-4" href={"/"}>Arya As</Link>
        <div className="flex space-x-160 p-1">
          <div className="ml-6 space-x-4">
            <a href='#home' className='hover:text-green-light'>Home</a>
            <a href='#about' className='hover:text-green-light'>About</a>
            <a href='#experience' className='hover:text-green-light'>Experience</a>
            <a href='#projects' className='hover:text-green-light'>Projects</a>
          </div>
        </div>
      </div>
      <div className="flex ml-auto mr-10 space-x-4 navbar-icon">
        {socials.map((social, index) => {

          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.Label}>
              <Icon className='text-xl hover:text-green-light icon'/>
            </Link>
          )
        })
        }
      </div>
    </div>
  );
}
