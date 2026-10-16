import Expecard from "../Components/Expecard";

const experiencias = [
  {
    title: "Bolsista Voluntário do Projeto Cidades Inteligentes na Unijuí",
    descricao: "Trabalhei em um projeto utilizando LoRa.",
    data: "2022",
  },
  {
    title: "Jovem Aprendiz na Unijuí",
    descricao: "Atuei desenvolvendo soluções para o site da Unijuí.",
    data: "jun. 2022 - jun. 2024",
  },
  {
    title: "Estagiário na SMED - Secretaria Municipal de Educação de Ijuí",
    descricao: "Atuei no suporte do sistema da SMED.",
    // Confira: se o estágio ainda está em andamento, troque o fim por "Atual".
    data: "jul. 2024 - jul. 2026",
  },
];

const Experiencia = () => {
  return (
    <section id="experiencia" className="mx-auto mt-20 max-w-7xl px-6">
      <h2 className="mb-10 flex justify-center text-center text-3xl text-white sm:text-4xl md:text-5xl">Minha Experiência</h2>
      <div className="flex flex-col gap-6 p-2 sm:p-5">
        {experiencias.map((exp) => (
          <Expecard key={exp.title} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experiencia;
