import { useState } from "react";

import logo from "../assets/logo.png";
import logoEmail from "../assets/email-logo.png";
import logoGit from "../assets/github-logo-roxo.png";
import logoLinkedin from "../assets/linke-logo.png";
import { EMAIL, GITHUB, LINKEDIN, menuItems } from "../data/links";

const socialLinks = [
  { image: logoEmail, alt: "E-mail", href: `mailto:${EMAIL}` },
  { image: logoLinkedin, alt: "LinkedIn", href: LINKEDIN },
  { image: logoGit, alt: "GitHub", href: GITHUB },
];

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-[#1B1D20] text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 sm:p-6">
        <a
          href="#sobre"
          className="flex items-center gap-2 text-lg transition-all duration-300 hover:scale-105 hover:text-[#AA5BFF] sm:text-xl"
        >
          <img src={logo} alt="" aria-hidden="true" className="h-9 w-9" />
          <span>Gabriel P. Schuinsekel</span>
        </a>

        <nav
          aria-label="Menu do rodapé"
          className="hidden items-center gap-5 text-xl lg:flex"
        >
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

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 p-2 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile-footer"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      <nav
        id="menu-mobile-footer"
        aria-label="Menu do rodapé (mobile)"
        inert={!open}
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 p-4 sm:flex-row sm:p-6">
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.alt}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={social.alt}
              className="transition-all duration-300 hover:scale-110"
            >
              <img src={social.image} alt="" aria-hidden="true" className="h-9 w-9" />
            </a>
          ))}
        </div>

        <span className="text-center text-xs text-white/70 sm:text-sm">
          Copyright © {new Date().getFullYear()} Gabriel Plagens Schuinsekel
        </span>
      </div>
    </footer>
  );
};

export default Footer;
