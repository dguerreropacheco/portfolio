"use client";
import { FaRegCopy } from "react-icons/fa";

export default function Contact() {
  const copyEmail = async () => {
    await navigator.clipboard.writeText("dguerreropacheco@gmail.com");
  };
  return (
    <section id="4" className="w-full max-w-[690px] px-5 mt-20 md:mt-30">
      <h1 className="title2">CONTACTO</h1>

      <div className="mt-10 space-y-6">
        <p className="subtitle2 leading-8">
          Si te interesa mi perfil para colaborar, sumar a un equipo o conversar
          sobre un proyecto, escríbeme.
        </p>

        <div className="pt-4 flex justify-center mt-8">
          <div className="contact-mail flex items-center gap-2">
            <a
              href="mailto:dnagrpc@gmail.com"
              className="inline-flex items-center gap-2 ml-5"
            >
              dnagrpc@gmail.com
            </a>

            <button
              onClick={() =>
                navigator.clipboard.writeText("dnagrpc@gmail.com")
              }
              aria-label="Copiar correo"
              className="cursor-pointer hover:text-[#d4af37] transition-colors ml-5"
            >
              <FaRegCopy size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
