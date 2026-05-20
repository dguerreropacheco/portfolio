import { baskerville, bricolage } from "./fonts";
import Social from "./social";
import View from "./view";

export default function Resume() {
  return (
    <>
      <section id="0" className="h-screen">
        <Social />

        <div className="flex flex-col items-center h-screen relative flex items-center justify-center translate-y-[-40px]">
          <h1 className="title">DIANA GUERRERO</h1>
          <h1 className="subtitle">
            DESARROLLADORA WEB FULL STACK JR/TRAINEE | PERÚ | DISPONIBLE
          </h1>
        </div>

        <View />
      </section>

      <section id="1" className="h-screen">
        <h1 className={`${bricolage.className} text-[16px] leading-[7.0]`}>
          hol
        </h1>
      </section>
    </>
  );
}
