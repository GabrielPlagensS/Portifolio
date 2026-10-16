import Button from "../Components/Button";
import { GITHUB } from "../data/links";

const Projetos = () => {
  return (
    <section id="projetos" className="mx-auto mt-20 max-w-7xl px-6">
      <h2 className="mb-10 flex justify-center text-center text-3xl text-white sm:text-4xl md:text-5xl">Meus Projetos</h2>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-xl text-white sm:text-2xl">
          Você pode visualizar os meus projetos no{" "}
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#AA5BFF] underline-offset-4 hover:underline"
          >
            GitHub
          </a>
          :
        </p>
        <Button href={GITHUB} title="GitHub" variant="github" />
      </div>
    </section>
  );
};

export default Projetos;
