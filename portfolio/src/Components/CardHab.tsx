type CardHabProps = {
  title: string;
};

const CardHab = ({ title }: CardHabProps) => {
  return (
    <div className="flex w-full items-center justify-center gap-4 rounded-lg border-l-4 border-purple-500 bg-neutral-900 px-4 py-2">
      <span className="text-sm text-white">{title}</span>
    </div>
  );
};

export default CardHab;
