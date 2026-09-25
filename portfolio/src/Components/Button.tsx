import logogit from "../assets/github-logo-roxo.png";

type ButtonProps = {
  title: string;
  variant: "default" | "outline" | "gitStyle";
  href: string;
};

const Button = ({
  title,
  variant = "default",
  href,
}: ButtonProps) => {

  const defaultStyle =
    "w-35 h-12 bg-linear-to-r from-[#AA5BFF] to-[#663699] cursor-pointer px-6 py-2 rounded-full text-black font-medium justify-center flex items-center";

  const outlineStyle =
    "w-35 h-12 bg-linear-to-r from-[#0A66C2] to-[#05305C] cursor-pointer px-6 py-2 rounded-full text-white font-medium justify-center flex items-center";

  const gitStyle =
    "w-35 h-12 bg-linear-to-r from-[#1B1D20] to-[#0D0D0D] cursor-pointer px-6 py-2 rounded-full text-white font-medium justify-center flex items-center gap-2";

  const buttonVariant =
    variant === "default"
      ? defaultStyle
      : variant === "outline"
      ? outlineStyle
      : gitStyle;

  // Verifica se é um link externo
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={buttonVariant}
    >
      {variant === "gitStyle" && (
        <img
          src={logogit}
          alt="GitHub"
          className="w-5 h-5"
        />
      )}

      {title}
    </a>
  );
};

export default Button;