import CardCursos from "../Components/CardCursos";

const Cursos =() => { 
    return(
        <div className="max-w-7xl mx-auto px-6 mt-20" id="cursos">
            <h1 className="text-[white] text-5xl mb-10 flex justify-center">Meus Cursos</h1>
            <div className="p-2">
                <CardCursos
                title="Bacharelado em Ciência da Computação"
                descricao="Universidade Regional do Noroeste do Estado do Rio Grande do Sul - Unijuí"
                data="2022 - Andamento"
                />
            </div>
            <div className="p-2">
                <CardCursos
                title="Inglês Básico"
                descricao="Senac Ijuí"
                data="2016 a 2019"
                />
            </div>
            <div className="p-2">
                <CardCursos
                title="Oficina de Robótica"
                descricao="Unijuí"
                data="2019"
                />
            </div>
            <div className="p-2">
                <CardCursos
                title="Javascript do Básico ao Avançado"
                descricao="Udemy"
                data="2023"
                />
            </div>
            <div className="p-2">
                <CardCursos
                title="Aprenda React JS na pratica a criar aplicações completas do extremo ZERO ao avançado!"
                descricao="Udemy"
                data="2025"
                />
            </div>
        </div>
    )

}

export default Cursos;