import Button from "../Components/Button";
import { EMAIL, GITHUB, LINKEDIN, PHONE_DISPLAY, PHONE_HREF } from "../data/links";

const Contato = () => {
  return (
    <section
      id="contato"
      className="mx-auto mt-20 w-full max-w-7xl px-4 pb-16 sm:px-6"
    >
      <h2 className="mb-10 text-center text-3xl font-light text-white sm:text-4xl md:text-5xl">
        Contato
      </h2>

      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-base text-white sm:text-lg md:text-2xl">
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="break-all transition-colors duration-300 hover:text-[#AA5BFF]"
          >
            {EMAIL}
          </a>
        </p>

        <p className="text-base text-white sm:text-lg md:text-2xl">
          <strong>Telefone:</strong>{" "}
          <a
            href={PHONE_HREF}
            className="transition-colors duration-300 hover:text-[#AA5BFF]"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 p-4 sm:flex-row">
        <Button href={LINKEDIN} title="LinkedIn" variant="linkedin" />
        <Button href={GITHUB} title="GitHub" variant="github" />
      </div>
    </section>
  );
};

export default Contato;
