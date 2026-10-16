import { useState } from "react";
import logo from "../assets/logo.png";
import { menuItems } from "../data/links";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
        <a
          href="#sobre"
          className="flex items-center gap-2 text-xl text-white transition-all duration-300 hover:scale-105 hover:text-[#AA5BFF]"
        >
          <img src={logo} alt="" aria-hidden="true" className="h-9 w-9" />
          <span>Gabriel P. Schuinsekel</span>
        </a>

        <nav
          aria-label="Menu principal"
          className="hidden items-center gap-5 text-xl text-white lg:flex"
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
          aria-controls="menu-mobile-header"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* inert: com o menu fechado os links não recebem foco via Tab */}
      <nav
        id="menu-mobile-header"
        aria-label="Menu principal (mobile)"
        inert={!open}
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
              className="transition-all duration-300 hover:translate-x-1 hover:text-[#AA5BFF]"
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
