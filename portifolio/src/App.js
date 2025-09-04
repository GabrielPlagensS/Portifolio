import Card from './Pages/card';
import Navbar from './Pages/navbar';
import Curso from './Pages/cursos';
import Experiencia from './Pages/experiencia';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Card/>
      <Experiencia/>
      <Curso/>
    </div>
  );
}

export default App;
