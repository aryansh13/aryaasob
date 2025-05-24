import Navbar from "./components/navbar";
import Link from "next/link";
import Welcome from "./components/home";
import Experience from "./components/experience";
import About from "./components/about";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-dark">
      <Navbar />
      <main className="min-h-screen mx-auto">
        <Welcome/>
        <About/>
        <Experience/>
        <Projects/>
      </main>

      <footer className="py-8 border-t border-dark-light/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="https://github.com/aryansh13" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-gray hover:text-primary transition-colors duration-300"
          >
            Built and designed by <span className="font-semibold text-primary"> Arya As</span>
          </Link>
          <p className="mt-2 text-sm text-light-gray">All rights reserved. © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
