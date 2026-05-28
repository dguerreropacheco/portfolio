import Navbar from "./ui/nav-bar";
import Resume from "./ui/resume";
import About from "./ui/about";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Navbar />      
      <Resume />
    </div>
  );
}
