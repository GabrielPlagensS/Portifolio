import './cont.css'

function Contato(){
    return(
        <div id="contato">  
            <h2 className="titulo">Contato</h2>
            <div className='conteiner'>
                <div className='texto-conteiner'>
                    <p>Celular: (55) 99215-2825</p>
                    <p>Email: gabriel.schuinsekel@gmail.com</p>
                </div>
                <div className='conteiner-botoes'>
                    <button className='botao-linkedin'>Linkedin</button>
                    <button className='botoa-github'>Github</button>
                </div>
            </div>
        </div>
    )
}

export default Contato;