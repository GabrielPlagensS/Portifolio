import './foo.css';
import Git from '../../Assets/git.png'
import Linkedin from '../../Assets/linkedin.png'
import Email from '../../Assets/email.png'
 
function Footer(){
    return(
        <div className='fundo-footer'>
            <footer>
                <div className='footer'>
                    <div className='avatar'>
                        <span className='logo'>G</span>
                        <p>Gabriel P. Schuinsekel</p>
                    </div>
                    <ul className="footer-links">
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#experiencia">Experiência</a></li>
                        <li><a href="#formacao">Formação e Cursos</a></li>
                        <li><a href="#habilidades">Habilidades</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>
                <div className='text-icons'>
                    <img src={Email} alt='icone-email'/>
                    <img src={Linkedin} alt='icone-linkedin'/>
                    <img src={Git} alt='icone-github'/>
                    <div>
                        <p>Copyright © 2025 Gabriel Plagens Schuinsekel</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;