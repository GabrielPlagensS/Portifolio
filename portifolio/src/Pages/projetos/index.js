import './pro.css'
import Git from '../../Assets/gitIcon.png'

function Projeto(){
    return(
        <div id='projetos'>
            <h2 className='titulo'>Meus projetos</h2>
            <div className='projeto-container'>
                <p>Você pode visualizar os meus projetos no <a>GitHub</a>:</p>
                <img src={Git} alt='icone do github'/>
            </div>
        </div>
    )
}

export default Projeto;