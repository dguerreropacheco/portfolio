import SkillsComponent from "../components/skills";

export default function Stack() {
  return (
    <section id="3" className="w-full mt-20 md:mt-30">
      <div className="w-full max-w-[690px] mx-auto px-5">
        <h1 className="title2">STACK</h1>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-5 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="card-skill">
            <h3 className="card-title">FRONTEND</h3>
            <SkillsComponent categoria="FRONTEND" />
          </div>

          <div className="card-skill">
            <h3 className="card-title">BACKEND</h3>
            <SkillsComponent categoria="LENGUAJE" />
          </div>

          <div className="card-skill">
            <h3 className="card-title">FRAMEWORKS</h3>
            <SkillsComponent categoria="FRAMEWORK" />
          </div>

          <div className="card-skill">
            <h3 className="card-title">BASE DE DATOS</h3>
            <SkillsComponent categoria="DATABASE" />
          </div>

          <div className="card-skill">
            <h3 className="card-title">HERRAMIENTAS</h3>
            <SkillsComponent categoria="TOOLS" />
          </div>
          <div className="card-skill">
            <h3 className="card-title">QA</h3>
            <SkillsComponent categoria="QA" />
          </div>
        </div>
      </div>
    </section>
  );
}
