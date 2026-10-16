type CardCursosProps = {
  title: string;
  descricao: string;
  data: string;
};

const CardCursos = ({ title, descricao, data }: CardCursosProps) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col gap-2">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-neutral-400">{descricao}</p>
      {/* neutral-400 em vez de 500: o contraste sobe de 3,78:1 para > 4,5:1 */}
      <span className="text-neutral-400 text-sm">{data}</span>
    </div>
  );
};

export default CardCursos;
