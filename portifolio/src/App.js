import gabriel from './Assets/Gabriel.jpg'
import './App.css';

function App() {
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
      <div className='card' id='sobre'>
        <div className='card-text'>
          <h2>Olá, eu sou o Gabriel Plagens Schuinsekel.</h2>
          <p>Sou estagiário na SMED na área de sistemas e estudante do curso bacharelado Ciência da Computação.</p>
          <div className='card-botoes'>
            <button className='botao-contato'>Contato</button>
            <button className='botao-linkedin'>Linkedin</button>
          </div>
        </div>
        <img className='foto' src={gabriel} />
      </div>
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
      <div className='Curso' id='formacao'>
        <h2 className='titulo'>Meus Cursos</h2>
        <div className='Cursos'>
          <div className='ciencia'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
