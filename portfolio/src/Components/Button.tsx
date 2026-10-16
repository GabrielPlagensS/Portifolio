import logogit from "../assets/github-logo-roxo.png";

type ButtonProps = {
  title: string;
  href: string;
  variant?: "primary" | "linkedin" | "github";
};

const base =
  "w-35 h-12 cursor-pointer px-6 py-2 rounded-full font-medium justify-center flex items-center transition-opacity duration-300 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const styles = {
  // texto branco: o preto tinha contraste 2,55:1 na ponta escura do gradiente
  primary: `${base} bg-linear-to-r from-[#8A3FE0] to-[#663699] text-white`,
  linkedin: `${base} bg-linear-to-r from-[#0A66C2] to-[#05305C] text-white`,
  github: `${base} bg-linear-to-r from-[#1B1D20] to-[#0D0D0D] text-white gap-2`,
};

const Button = ({ title, href, variant = "primary" }: ButtonProps) => {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={styles[variant]}
    >
      {variant === "github" && (
        <img src={logogit} alt="" aria-hidden="true" className="w-5 h-5" />
      )}
      {title}
    </a>
  );
};

export default Button;
