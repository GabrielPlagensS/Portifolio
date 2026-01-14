import CardHab from "../Components/CardHab";

const Habilidades = () =>{
    return(
        <div className="max-w-7xl mx-auto px-6 mt-20">
            <h1 className="text-[white] text-5xl mb-10 flex justify-center" id="habilidade" >Minhas habilidades</h1>
            <div className="flex align-items justify-center">
                <div className="p-5 flex flex-col gap-4">
                    <h3 className="text-[white] text-4xl p-2">Hard skill</h3>
                    <CardHab
                     title="Javascript"
                    />
                    <CardHab
                     title="HTML"
                    />
                    <CardHab
                     title="CSS"
                    />
                    <CardHab
                     title="React"
                    />
                    <CardHab
                     title="Typescript"
                    />
                    <CardHab
                     title="Tailwind"
                    />
                </div>
                <div className="p-5 flex flex-col gap-4">
                    <h3 className="text-[white] text-4xl p-2">Soft skill</h3>
                    <CardHab
                     title="Trabalho em equipe"
                    />
                    <CardHab
                     title="Github"
                    />
                     <CardHab
                     title="Inglês"
                    />
                </div>
            </div>
        </div>
    )
}

export default Habilidades;