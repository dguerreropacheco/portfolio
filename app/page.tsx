import Navbar from "./ui/nav-bar";
import Resume from "./ui/resume";
import About from "./ui/about";
import Projects from "./ui/projects";
import Stack from "./ui/stack";
import Contact from "./ui/contact";
import Footer from "./ui/pie";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Navbar />
      <Resume />
      <About />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}
