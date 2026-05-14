import { bricolage } from "./fonts";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[60px] flex items-center justify-end pr-15 pt-5 z-50">
        <div className="hidden md:flex gap-10">
          <a href="/" className={`${bricolage.className} text-[15px]`}>
            PROJECTS
          </a>

          <a href="/" className={`${bricolage.className} text-[15px]`}>
            SKILLS
          </a>

          <a href="/" className={`${bricolage.className} text-[15px]`}>
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
}
