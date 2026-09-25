import Button from "../Components/Button";
import fotocard from "/src/assets/Foto-card.png"

const Card = () => {
  return (  
    <div className="p-10" id="sobre">
            <div className="max-w-375 bg-[#141516] flex items-center justify-center gap-4 p-10 mx-auto rounded-tl-lg rounded-br-lg">
                <div className="flex flex-col gap-6 md:gap-10 max-w-2xl">
                    <a className="text-white text-3xl md:text-5xl font-light">Olá, eu sou o <b>Gabriel Plagens Schuinsekel</b>.</a>
                    <a className="text-white mt-6 max-w-xl leading-relaxed">Sou estagiário na SMED na área de sistemas e estudante do curso bacharelado Ciência da Computação.</a>
                    <div className="flex flex-row gap-4">
                        <Button title="Contato" variant="default" href="#contato"/>
                        <Button title="Linkedin" variant="outline" href="https://www.linkedin.com/in/gabriel-plagens-schuinsekel-98430a35a/"/>
                    </div>
                </div>
                <img src={fotocard} alt="Foto de perfil" />
            </div>
    </div>
)
}
export default Card;
