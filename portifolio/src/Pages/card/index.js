import './card.css'
import gabriel from '../../Assets/Gabriel.jpg'

function Card() {
    return (
        <div className='card' id='sobre'>
            <div className='card-text'>
                <h2>Olá, eu sou o Gabriel Plagens Schuinsekel.</h2>
                <p>Sou estagiário na SMED na área de sistemas e estudante do curso bacharelado Ciência da Computação.</p>
                <div className='card-botoes'>
                    <button className='botao-contato'>Contato</button>
                    <button className='botao-linkedin'>Linkedin</button>
                </div>
            </div>
            <img className='foto' src={gabriel} alt='Foto do gabriel'/>
        </div>
    )
}

export default Card;