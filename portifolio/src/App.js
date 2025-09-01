import gabriel from './Assets/Gabriel.jpg'
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <div className='avatar'>
          <span className='logo'>G</span>
          <span>Gabriel P. Schuinsekel</span>
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
      <div id='sobre'>
        <div className='card'>
          <h2>Olá, eu sou o Gabriel Plagens Schuinsekel.</h2>
          <a>Sou estagiário na SMED na área de sistemas e estudante do curso bacharelado Ciência da Computação.</a>
          <img className='foto' src={gabriel} />
        </div>
      </div>
    </div>
  );
}

export default App;
