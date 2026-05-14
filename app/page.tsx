import Navbar from "./ui/nav-bar";
import Resume from "./ui/resume";
import Scroll from "./ui/scroll";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Navbar />

      <Scroll />
      
      <Resume />
    </div>
  );
}
