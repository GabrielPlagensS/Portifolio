import Button from "../Components/Button";

const Contato = () => {
  return (
    <section
      id="contato"
      className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 md:mt-20"
    >
      {/* Título */}
      <h2 className="mb-8 text-center text-3xl font-light text-white sm:text-4xl md:mb-10 md:text-5xl">
        Contato
      </h2>

      {/* Informações */}
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-base text-white sm:text-lg md:text-2xl">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:gabrielschuinsekel@gmail.com"
            className="transition-colors duration-300 hover:text-[#AA5BFF]"
          >
            gabriel.schuinsekel@gmail.com
          </a>
        </p>

        <p className="text-base text-white sm:text-lg md:text-2xl">
          <strong>Telefone:</strong>{" "}
          <a
            href="tel:+5555992152825"
            className="transition-colors duration-300 hover:text-[#AA5BFF]"
          >
            (55) 99215-2825
          </a>
        </p>
      </div>

      {/* Redes sociais */}
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row p-4">
        <Button
          href="https://www.linkedin.com/in/gabriel-plagens-schuinsekel-98430a35a/"
          title="LinkedIn"
          variant="outline"
        />

        <Button
          href="https://github.com/GabrielPlagensS"
          title="GitHub"
          variant="gitStyle"
        />
      </div>
    </section>
  );
};

export default Contato;