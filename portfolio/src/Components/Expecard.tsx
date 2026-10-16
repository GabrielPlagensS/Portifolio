type ExperienceCardProps = {
  title: string;
  descricao: string;
  data: string;
};

const Expecard = ({ title, descricao, data }: ExperienceCardProps) => {
  return (
    <div className="relative flex flex-col items-start gap-2 rounded-xl bg-neutral-900 p-6 shadow-lg sm:flex-row sm:justify-between sm:gap-6 md:p-8">
      <span className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-[#AA5BFF]" />
      <div className="pl-6 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-gray-400">{descricao}</p>
      </div>
      <span className="pl-6 text-sm text-gray-300 sm:whitespace-nowrap sm:pl-0">
        {data}
      </span>
    </div>
  );
};

export default Expecard;
