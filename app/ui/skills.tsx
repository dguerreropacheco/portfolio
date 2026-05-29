import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma";
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default async function Skills() {
  const listaSkills = await prisma.skill.findMany({

    where: {
      categoria: 'LENGUAJE',

    }
   });

  return (
    <div className="absolute right-4 md:right-21 top-1/2 translate-y-[-97px]">
      <div className="flex flex-col items-end gap-4">
        {listaSkills.length === 0 ? (
          <p className="text">Sin datos</p>
        ) : (
          listaSkills.map((skill) => (
            <p key={skill.id} className="text">
              {skill.nombre.toUpperCase()}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
