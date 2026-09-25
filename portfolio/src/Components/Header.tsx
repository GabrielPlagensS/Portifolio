import { useState } from "react";
import logo from "../assets/logo.png";

const menuItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Cursos", href: "#cursos" },
  { label: "Habilidades", href: "#habilidade" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black">
      <div className="mx-auto flex max-w-8xl items-center justify-between p-6">

        {/* Logo */}
        <a
          href="#sobre"
          className="flex items-center gap-2 text-xl text-white transition-all duration-300 hover:scale-105 hover:text-[#AA5BFF]"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-9 w-9"
          />

          <span>Gabriel P. Schuinsekel</span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden items-center gap-5 text-xl text-white lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-[#AA5BFF]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botão Mobile */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Menu Mobile */}
      <nav
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 pb-6 text-white">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#AA5BFF]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;