
import Experiencia from "./Pages/Experiencia";
import Header from "./Components/Header";
import Card from "./Pages/Card";
import Cursos from "./Pages/Cursos";
import Habilidades from "./Pages/Habilidades";
import Contato from "./Pages/Contato";
import Projetos from "./Pages/Projetos";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[black] min-h-screen">
      <Header/>
      <Card/>
      <Experiencia/>
      <Cursos/>
      <Habilidades/>
      <Projetos/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;
