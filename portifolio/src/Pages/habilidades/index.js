import './hab.css'

function Habilidade() {
    return (
        <div id='habilidades'>
            <h2 className="titulo">Minhas habilidades</h2>
            <div className="habilidades">
                <div className='coluna'>
                    <h2>Hard skills</h2>
                    <p className='text-hailidades'>Javascript</p>
                    <p className='text-hailidades'>HTML</p>
                    <p className='text-hailidades'>CSS</p>
                    <p className='text-hailidades'>React</p>
                </div>

                <div className='coluna'>
                    <h2>Soft skills</h2>
                    <p className='text-hailidades'>Trabalho em equipe</p>
                </div>
            </div>
        </div>
    )
}

export default Habilidade;