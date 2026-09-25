import { useState } from "react";

import logo from "../assets/logo.png";
import logoEmail from "../assets/email-logo.png";
import logoGit from "../assets/github-logo-roxo.png";
import logoLinkedin from "../assets/linke-logo.png";

const menuItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Cursos", href: "#cursos" },
  { label: "Habilidades", href: "#habilidade" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const socialLinks = [
  {
    image: logoEmail,
    alt: "E-mail",
    href: "mailto:gabrielschuinsekel@gmail.com",
  },
  {
    image: logoLinkedin,
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-plagens-schuinsekel-98430a35a/",
  },
  {
    image: logoGit,
    alt: "GitHub",
    href: "https://github.com/GabrielPlagensS",
  },
];

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-[#1B1D20] text-white">
      {/* Parte principal */}
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between p-4 sm:p-6">

        {/* Logo */}
        <a
          href="#sobre"
          className="flex items-center gap-2 text-lg transition-all duration-300 hover:scale-105 hover:text-[#AA5BFF] sm:text-xl"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-9 w-9"
          />

          <span>Gabriel P. Schuinsekel</span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden items-center gap-5 text-xl lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-all duration-300 hover:scale-105 hover:text-[#AA5BFF]"
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
          open
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 pb-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="transition-all duration-300 hover:translate-x-1 hover:text-[#AA5BFF]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Informações do rodapé */}
      <div className="mx-auto flex w-full max-w-8xl flex-col items-center justify-between gap-4 p-4 sm:flex-row sm:p-6">

        {/* Redes sociais */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.alt}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.alt}
              className="transition-all duration-300 hover:scale-110"
            >
              <img
                src={social.image}
                alt={social.alt}
                className="h-9 w-9"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <span className="text-center text-xs text-white/70 sm:text-sm">
          Copyright © 2025 Gabriel Plagens Schuinsekel
        </span>
      </div>
    </footer>
  );
};

export default Footer;