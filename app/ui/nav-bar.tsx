"use client";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full h-[60px] flex items-center justify-between px-6 md:px-20 pt-5 z-50 bg-[#e7dfd9]">
      <a
        onClick={() => {
          document.getElementById("0")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="principal text-[16px] leading-none cursor-pointer"
      >
        DG.
      </a>

      <div className="flex items-center gap-3 md:gap-6">
        <a href="/" className="text text-[12px] md:text-[14px] leading-none">
          PERFIL
        </a>

        <a href="/" className="text text-[12px] md:text-[14px] leading-none">
          PROYECTOS
        </a>

        <a href="/" className="text text-[12px] md:text-[14px] leading-none">
          STACK
        </a>

        <a href="/" className="text text-[12px] md:text-[14px] leading-none">
          CONTACTO
        </a>
      </div>
    </div>
  );
}
