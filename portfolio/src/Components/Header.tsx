import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black">
      <div className="mx-auto w-full flex items-center justify-between p-6 max-w-8xl">
        <div className="text-white flex gap-2 text-[20px] cursor-pointer w-xs items-center">
            <img src="/src/assets/logo.png" alt="Logo" className="w-9 h-9" />
          <a className="
            transition-all
            duration-300
            hover:text-[#AA5BFF]
            hover:scale-105
          ">
            Gabriel P. Schuinsekel
          </a>
        </div>

        <nav className="hidden md:flex text-white gap-5 text-[20px] w-3xl">
          {["Sobre", "Experiencia", "Formação e Cursos", "Habilidades", "Projetos", "Contato"].map(item => (
            <a
              key={item}
              className="
                cursor-pointer
                transition-all
                duration-300
                hover:text-[#AA5BFF]
                hover:scale-105
              "
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      <div
        className={`
          md:hidden
          transition-all
          duration-300
          overflow-hidden
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col gap-4 px-6 pb-6 text-white">
          {["Sobre", "Experiencia", "Formação e Cursos", "Habilidades", "Projetos", "Contato"].map(item => (
            <a
              key={item}
              className="
                cursor-pointer
                transition-all
                duration-300
                hover:text-[#AA5BFF]
                hover:translate-x-1
              "
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
