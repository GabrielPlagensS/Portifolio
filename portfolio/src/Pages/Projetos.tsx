import Button from "../Components/Button";

const Projetos =() => {
    return(
        <div className="max-w-7xl mx-auto px-6 mt-20" id="projetos">   
            <h1 className="text-[white] text-5xl mb-10 flex justify-center">Meus Projetos</h1>
            <div className="flex justify-center items-center flex-col gap-4">
                <a className="text-[white] text-2xl">Você pode visualizar os meus projetos no <a className="text-[#AA5BFF]">GitHub:</a></a>
                <Button href="https://github.com/GabrielPlagensS" title="GitHub" variant="gitStyle"/>
            </div>  

        </div>
    )
}     

export default Projetos;