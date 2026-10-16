import Button from "../Components/Button";
import fotocard from "../assets/Foto-card.png";
import { LINKEDIN } from "../data/links";

const Card = () => {
  return (
    <section id="sobre" className="w-full p-4 md:p-10">
      <div className="mx-auto flex w-full max-w-375 flex-col items-center justify-center gap-6 rounded-3xl bg-[#141516] p-4 sm:p-6 md:flex-row md:gap-4 md:rounded-tl-lg md:rounded-br-lg md:p-10">
        <div className="flex w-full max-w-2xl flex-col gap-6 text-center md:text-left">
          <h1 className="text-2xl font-light leading-tight text-white sm:text-3xl md:text-5xl">
            Olá, eu sou o <b>Gabriel Plagens Schuinsekel</b>.
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-white sm:text-base md:mx-0">
            Sou estudante do curso de bacharelado em Ciência da Computação da
            Unijuí e atuo como desenvolvedor Full-Stack.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Button title="Contato" variant="primary" href="#contato" />
            <Button title="LinkedIn" variant="linkedin" href={LINKEDIN} />
          </div>
        </div>

        <img
          src={fotocard}
          alt="Foto de perfil de Gabriel Plagens Schuinsekel"
          width={355}
          height={446}
          className="w-36 shrink-0 sm:w-40 md:w-56"
        />
      </div>
    </section>
  );
};

export default Card;
