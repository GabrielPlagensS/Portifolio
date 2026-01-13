
import Experiencia from "./Pages/Experiencia";
import Header from "./Components/Header";
import Card from "./Pages/Card";
import Cursos from "./Pages/Cursos";

function App() {
  return (
    <div className="bg-[black] min-h-screen">
      <Header/>
      <Card/>
      <Experiencia/>
      <Cursos/>
    </div>
  );
}

export default App;
