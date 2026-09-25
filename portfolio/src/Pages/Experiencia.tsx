import Expecard from "../Components/Expecard";

const Experiencia =() => {
    return (
        <div className="max-w-7xl mx-auto px-6 mt-20" id="experiencia">
            <h1 className="text-[white] text-5xl mb-10 flex justify-center">Minha Experiência</h1>
            <div className="p-5">
                <Expecard 
                    title="Bolsista Voluntário do Projeto Cidades Inteligentes na Unijuí" 
                    descricao="Trabalhei em um projeto utilizando LoRa." 
                    data="2022" 
                />
            </div>
            <div className="p-5">
                <Expecard 
                    title="Jovem Aprendiz na Unijuí" 
                    descricao="Atuei desenvolvendo soluções para o site da Unijuí." 
                    data="jun. 2022 - jun. 2024" 
                />
            </div>
            <div className="p-5">
                <Expecard 
                    title="Estagiário na SMED - Secretaria Municipal de Educação de Ijuí" 
                    descricao="Atuo no sistema da SMED." 
                    data="jul. 2024 - jul. 2026" 
                />
            </div>
        </div>
    )
} 

export default Experiencia; 