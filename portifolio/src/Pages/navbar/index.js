import './nav.css'

function Navbar() {
    return (
        <div>
            <nav>
                <div className='avatar'>
                    <span className='logo'>G</span>
                    <p>Gabriel P. Schuinsekel</p>
                </div>
                <ul className="navbar-links">
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#experiencia">Experiência</a></li>
                    <li><a href="#formacao">Formação e Cursos</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;