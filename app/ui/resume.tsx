import { baskerville, bricolage } from "./fonts";
import Social from "./social";
import View from "./view";
import Skills from "./skills";

export default function Resume() {
  return (
    <>
      <section id="0" className="h-screen">
        <Social />
        <div className="flex flex-col items-center justify-center h-screen relative translate-y-[-40px] px-20 md:px-40 text-center">
          <h1 className="title">DIANA GUERRERO</h1>

          <h1 className="subtitle max-w-[800px]">
            DESARROLLADORA WEB FULL STACK JR/TRAINEE | PERÚ | DISPONIBLE
          </h1>
        </div>
        <Skills />
        <View />
      </section>

    </>
  );
}
