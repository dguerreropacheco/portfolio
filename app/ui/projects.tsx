import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

export default async function Projects() {
  const proyectos = await prisma.proyecto.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return (
    <section id="2" className="w-full max-w-[690px] px-5 mt-20 md:mt-30">
      <h1 className="title2">PROYECTOS</h1>

      <div className="mt-8 space-y-6">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="project-card">
            <h3 className="project-title">{proyecto.titulo}</h3>

            <p className="project-description">{proyecto.descripcion}</p>

            <div className="project-description flex gap-4 mt-4">
              {proyecto.repoUrl?.trim() && (
                <a href={proyecto.repoUrl} target="_blank">
                  GitHub
                </a>
              )}

              {proyecto.demoUrl?.trim() && (
                <a href={proyecto.demoUrl} target="_blank">
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
