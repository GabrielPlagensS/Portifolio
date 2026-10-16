import CardHab from "../Components/CardHab";

const hardSkills = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "TypeScript",
  "Tailwind",
  "GitHub",
];
const softSkills = ["Trabalho em equipe", "Inglês"];

const Habilidades = () => {
  return (
    <section id="habilidades" className="mx-auto mt-20 max-w-7xl px-6">
      <h2 className="mb-10 flex justify-center text-center text-3xl text-white sm:text-4xl md:text-5xl">Minhas Habilidades</h2>
      <div className="flex flex-col items-stretch justify-center gap-8 sm:flex-row sm:items-start">
        <div className="flex flex-1 flex-col gap-4 sm:max-w-xs">
          <h3 className="p-2 text-2xl text-white sm:text-3xl">Hard skills</h3>
          {hardSkills.map((skill) => (
            <CardHab key={skill} title={skill} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-4 sm:max-w-xs">
          <h3 className="p-2 text-2xl text-white sm:text-3xl">Soft skills</h3>
          {softSkills.map((skill) => (
            <CardHab key={skill} title={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
