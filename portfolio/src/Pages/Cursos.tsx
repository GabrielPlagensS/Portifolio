import CardCursos from "../Components/CardCursos";

const cursos = [
  {
    title: "Bacharelado em Ciência da Computação",
    descricao:
      "Universidade Regional do Noroeste do Estado do Rio Grande do Sul - Unijuí",
    data: "2022 - Andamento",
  },
  { title: "Inglês Básico", descricao: "Senac Ijuí", data: "2016 - 2019" },
  { title: "Oficina de Robótica", descricao: "Unijuí", data: "2019" },
  { title: "JavaScript do Básico ao Avançado", descricao: "Udemy", data: "2023" },
  {
    title:
      "Aprenda React JS na prática a criar aplicações completas do extremo ZERO ao avançado!",
    descricao: "Udemy",
    data: "2025",
  },
];

const Cursos = () => {
  return (
    <section id="cursos" className="mx-auto mt-20 max-w-7xl px-6">
      <h2 className="mb-10 flex justify-center text-center text-3xl text-white sm:text-4xl md:text-5xl">Meus Cursos</h2>
      <div className="flex flex-col gap-4 p-2">
        {cursos.map((curso) => (
          <CardCursos key={curso.title} {...curso} />
        ))}
      </div>
    </section>
  );
};

export default Cursos;
