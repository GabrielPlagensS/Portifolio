import './expe.css'

function Experiencia() {
    return (
        <div id='experiencia'>
            <div className='cargos'>
                <h2 className='titulo'>Minha Experiência</h2>
                <div className='cargo'>
                    <div className='cargo-header'>
                        <h2>Bolsista Voluntário do Projeto Cidades Inteligentes na Unijuí</h2>
                        <p>2022</p>
                    </div>
                    <p>Trabalhei em um projeto utilizando LoRa</p>
                </div>
                <div className='cargo'>
                    <div className='cargo-header'>
                        <h2>Jovem Aprendiz na Unijuí</h2>
                        <p>2022 - 2024</p>
                    </div>
                    <p>Atuei desenvolvendo soluções para o site da Unijuí</p>
                </div>
                <div className='cargo'>
                    <div className='cargo-header'>
                        <h2>Estagiário na SMED - Secretaria Municipal de Educação de Ijuí</h2>
                        <p>2024 - Atual</p>
                    </div>
                    <p>Atuo no sistema da SMED</p>
                </div>
            </div>
        </div>
    )
}

export default Experiencia;