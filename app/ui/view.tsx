export default function View() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
      
      <p className="text">COMBINAR LO COMPLEJO Y LO VISUAL</p>

      <button className="group flex flex-col items-center border-none bg-transparent cursor-pointer p-0 mt-8 mb-4">
        <span className="text">
          VER PROYECTOS
        </span>

        <div className="w-32 h-[1px] bg-[#c2a673] mt-2 transition-transform duration-300 group-hover:scale-x-110" />
      </button>

    </div>
  );
}