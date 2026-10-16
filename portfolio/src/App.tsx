import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Pages/Card";
import Experiencia from "./Pages/Experiencia";
import Cursos from "./Pages/Cursos";
import Habilidades from "./Pages/Habilidades";
import Projetos from "./Pages/Projetos";
import Contato from "./Pages/Contato";

function App() {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <Card />
        <Experiencia />
        <Cursos />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
