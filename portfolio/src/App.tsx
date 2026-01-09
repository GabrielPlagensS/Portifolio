import Button from "./Components/Button";
import Header from "./Components/Header";

function App() {
  return (
    <div className="min-h-screen bg-[black]">
      <Header/>
      <div className="p-5">
        <div className="max-w-375 bg-[#141516] flex items-center justify-center gap-4 p-10 mx-auto rounded-tl-lg">
          <div className="flex flex-col gap-6 md:gap-10 max-w-2xl">
            <a className="text-white text-3xl md:text-5xl font-light">Olá, eu sou o <b>Gabriel Plagens Schuinsekel</b>.</a>
            <a className="text-white mt-6 max-w-xl leading-relaxed">Sou estagiário na SMED na área de sistemas e estudante do curso bacharelado Ciência da Computação.</a>
          <div className="flex flex-row gap-4">
            <Button title="Contato" variant="default"/>
            <Button title="Linkedin" variant="outline"/>
          </div>
          </div>
          <img src="/src/assets/Foto-card.png" alt="Foto de perfil" />
        </div>
      </div>
    </div>
  );
}

export default App;
