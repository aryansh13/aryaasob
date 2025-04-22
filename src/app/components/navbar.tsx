"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SiMinutemailer, SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  ];

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`navbar sticky top-0 flex flex-wrap px-4 py-3 items-center z-[100] ${isScrolled ? 'shadow-md' : ''} transition-shadow bg-dark`}>
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Link className="text-xl font-bold" href={"/"}>Arya As</Link>
        <button
          className="lg:hidden text-light hover:text-green-light"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </div>

      <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row w-full lg:w-auto lg:ml-6 mt-4 lg:mt-0`}>
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 font-semibold">
          <a href='#home' className='hover:text-green-light' onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href='#about' className='hover:text-green-light' onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href='#experience' className='hover:text-green-light' onClick={() => setMobileMenuOpen(false)}>Experience</a>
          <a href='#projects' className='hover:text-green-light' onClick={() => setMobileMenuOpen(false)}>Projects</a>
        </div>
      </div>

      <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex lg:ml-auto mt-4 lg:mt-0 space-x-4 navbar-icon`}>
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.Label}>
              <Icon className='text-xl hover:text-green-light icon'/>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
