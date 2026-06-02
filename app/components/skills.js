import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma";
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default async function SkillsComponent({ categoria }) {
  const listaSkills = await prisma.skill.findMany({
    where: {
      categoria,
    },
  });

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {listaSkills.map((skill) => (
        <span key={skill.id} className="skill-pill">
          {skill.nombre}
        </span>
      ))}
    </div>
  );
}
