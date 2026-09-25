import { useState } from "react";
import logoemail  from "../assets/email-logo.png"
import logogit  from "../assets/github-logo-roxo.png"
import logolinke from "../assets/linke-logo.png"


const Footer = () => {
    const [open, setOpen] = useState(false);
  return (
    <footer className="bg-[#1B1D20]">
        <div className="mx-auto w-full flex items-center justify-between p-6 max-w-8xl bg-[#1B1D20]">
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
                    href={
                        item === "Habilidades"
                        ? "#habilidade"
                        : item === "Sobre"
                        ? "#sobre"
                        : item === "Experiencia"
                        ? "#experiencia"
                        : item === "Formação e Cursos"
                        ? "#cursos"
                        : item === "Projetos"
                        ? "#projetos"
                        : item === "Contato"
                        ? "#contato"
                        : "#"
                    }
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
       <div className="mx-auto w-full flex items-center justify-between p-6 max-w-8xl ">
            <div className="text-white flex gap-2 text-[20px] cursor-pointer w-xs items-center">
                <img src={logoemail} alt="E-mail" className="w-9 h-9" />
                <img src={logolinke} alt="LinkedIn" className="w-9 h-9" />
                <img src={logogit} alt="GitHub" className="w-9 h-9" />
            </div>
            <span className="text-[white]">Copyright © 2025 Gabriel Plagens Schuinsekel</span>
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
                    href={
                        item === "Habilidades"
                        ? "#habilidade"
                        : item === "Sobre"
                        ? "#sobre"
                        : item === "Experiencia"
                        ? "#experiencia"
                        : item === "Formação e Cursos"
                        ? "#cursos"
                        : item === "Projetos"
                        ? "#projetos"
                        : item === "Contato"
                        ? "#contato"
                        : "#"
                    }
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
    </footer>
  )
}

export default Footer;