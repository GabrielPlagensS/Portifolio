import './curso.css'

function Curso() {
    return (
        <div id='formacao'>
            <h2 className='titulo'>Meus Cursos</h2>
            <div className='Cursos'>
                <div className='curso-container'>
                    <div className='curso-card'>
                        <h2>Bacharelado em Ciência da Computação</h2>
                        <p>Universidade Regional do Noroeste do Estado do Rio Grande do Sul</p>
                        <p>2022 - Andamento</p>
                    </div>
                    <div className='curso-card'>
                        <h2>Aprenda React JS na pratica a criar aplicações completas do extremo ZERO ao avançado!</h2>
                        <p>Udemy</p>
                        <p>2025</p>
                    </div>
                </div>

                <div className='curso-container'>
                    <div className='curso-card'>
                        <h2>Inglês Básico</h2>
                        <p>Senac Ijuí</p>
                        <p>2016 a 2019</p>
                    </div>
                    <div className='curso-card'>
                        <h2>Criando Game Avançado do Zero com Unreal Engine e Blueprints</h2>
                        <p>Udemy</p>
                        <p>2021</p>
                    </div>
                </div>

                <div className='curso-container'>
                    <div className='curso-card'>
                        <h2>Oficina de Robótica</h2>
                        <p>Unijuí</p>
                        <p>2019</p>
                    </div>
                    <div className='curso-card'>
                        <h2>Javascript do Básico ao Avançado</h2>
                        <p>Udemy</p>
                        <p>2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curso;