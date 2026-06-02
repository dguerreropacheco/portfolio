export default function Footer() {
  return (
    <footer className="w-full mt-18 pb-8">
      <div className="max-w-[690px] mx-auto px-5">
        <div className="w-full h-px bg-[#e8e3dc] mb-6"></div>

        <p className="text-center text-xs opacity-40 mt-8 ml-5">
          DIANA GUERRERO · © {new Date().getFullYear()} Todos los derechos
          reservados
        </p>
      </div>
    </footer>
  );
}
