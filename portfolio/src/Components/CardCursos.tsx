type cardCursosProps = {
    title: string;
    descricao: string;
    data: string;
};

const CardCursos = ({title, descricao, data,} :cardCursosProps) => {
    return (
        <div className="bg-[#1B1D20] rounded-lg p-5 m-5 border border-[white] max-w-xl flex flex-col gap-2">
            <h2 className="text-[white] text-xl font-bold">{title}</h2>
            <a className="text-[white]">{descricao}</a>
            <a className="text-[white]">{data}</a>
        </div>
    )
}
export default CardCursos;
