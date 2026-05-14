import { baskerville, bricolage } from "./fonts";
import Social from "./social";
import Mouse from "./mouse";

export default function Resume() {
  return (
    <>
      <section id="0" className="h-screen">
        <Social />

        <div
          className="flex flex-col items-center h-screen relative flex items-center justify-center translate-y-[-10px]">
          <h1 className={`${baskerville.className} text-[55px] leading-[0.8]`}>
            DIANA GUERRERO
          </h1>
          <h1 className={`${bricolage.className} text-[16px] leading-[7.0]`}>
            FULL STACK DEVELOPER
          </h1>
        </div>

        <Mouse />
      </section>

      <section id="1" className="h-screen">
        <h1 className={`${bricolage.className} text-[16px] leading-[7.0]`}></h1>
      </section>
    </>
  );
}
