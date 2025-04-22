import Navbar from "./components/navbar";
import Link from "next/link";
import Welcome from "./components/home";
import Experience from "./components/experience";
import About from "./components/about";
import Projects from "./components/projects";


export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 mx-auto max-w-7xl">
        <Welcome/>
        <About/>
        <Experience/>
        <Projects/>
      </main>

      <footer className="footer-text text-center text-base text-gray-500 p-5">
        <Link href="https://github.com/aryansh13">
          Built and designed by <span className="font-bold"> Arya As</span>.
        </Link> <br/>
          All rights reserved. ©
      </footer>
    </div>
  );
}
