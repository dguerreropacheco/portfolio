export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full h-[60px] flex items-center justify-between px-20 pt-5 z-50">

      <a href="/" className="principal text-[16px] leading-none">
        DG.
      </a>

      <div className="hidden md:flex items-center gap-6">
        <a href="/" className="text text-[14px] leading-none">
          PERFIL
        </a>

        <a href="/" className="text text-[14px] leading-none">
          PROYECTOS
        </a>

        <a href="/" className="text text-[14px] leading-none">
          STACK
        </a>

        <a href="/" className="text text-[14px] leading-none">
          CONTACTO
        </a>
      </div>
    </div>
  );
}