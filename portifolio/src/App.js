import Card from './Pages/card';
import Navbar from './Pages/navbar';
import Curso from './Pages/cursos';
import Experiencia from './Pages/experiencia';
import Habilidade from './Pages/habilidades';
import Projeto from './Pages/projetos';
import Contato from './Pages/contato';
import Footer from './Pages/footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Card/>
      <Experiencia/>
      <Curso/>
      <Habilidade/>
      <Projeto/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;