"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SiMinutemailer, SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

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

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300 backdrop-blur-md ${
        isScrolled 
          ? 'bg-dark/90 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold bg-gradient-text transition-all duration-300 hover:opacity-80"
        >
          Arya As
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="nav-link"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <Link 
                href={social.Link} 
                key={index} 
                aria-label={social.Label}
                className="social-icon"
              >
                <Icon />
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-light hover:text-primary-light"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? 
            <HiX className="text-2xl" /> : 
            <HiMenu className="text-2xl" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark-light mt-4 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="flex flex-col p-4 space-y-3">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="nav-link block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="flex pt-4 space-x-4 border-t border-gray-700">
              {socials.map((social, index) => {
                const Icon = social.Icon;
                return (
                  <Link 
                    href={social.Link} 
                    key={index} 
                    aria-label={social.Label}
                    className="social-icon"
                  >
                    <Icon />
                  </Link>
                )
              })}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
