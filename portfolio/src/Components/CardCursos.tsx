type CardCursosProps = {
  title: string
  descricao: string
  data: string
};

const CardCursos = ({ title, descricao, data }: CardCursosProps) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col gap-2">
      <h2 className="text-white text-lg font-semibold">
        {title}
      </h2>

      <p className="text-neutral-400">
        {descricao}
      </p>

      <span className="text-neutral-500 text-sm">
        {data}
      </span>
    </div>
  )
}

export default CardCursos