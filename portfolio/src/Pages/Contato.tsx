import Button from "../Components/Button";

const Contato =() => {
    return(
        <div className="max-w-7xl mx-auto px-6 mt-20" id="contato">   
            <h1 className="text-[white] text-5xl mb-10 flex justify-center">Contato</h1>
            <div className="flex items-center flex-col gap-4 p-5">
                <span className="text-[white] text-2xl text-left p-5">Email: gabrielschuinsekel@gmail.com</span>
                <span className="text-[white] text-2xl text-left p-5">Telefone: (55) 99215-2825</span>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 p-5">
                <Button href="https://www.linkedin.com/in/gabriel-plagens-schuinsekel-98430a35a/" title="LinkedIn" variant="outline"/>
                <Button href="https://github.com/GabrielPlagensS" title="GitHub" variant="gitStyle"/>
            </div>
        </div>
    )
}

export default Contato;