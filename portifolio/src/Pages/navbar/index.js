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
                    <li><p href="#sobre">Sobre</p></li>
                    <li><p href="#experiencia">Experiência</p></li>
                    <li><p href="#formacao">Formação e Cursos</p></li>
                    <li><p href="#habilidades">Habilidades</p></li>
                    <li><p href="#projetos">Projetos</p></li>
                    <li><p href="#contato">Contato</p></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;