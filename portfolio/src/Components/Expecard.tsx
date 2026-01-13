type ExperienceCardProps = {
    title: string;
    descricao: string;
    data: string;
        
};

const Expecard = ({ title, descricao, data }: ExperienceCardProps) => {
    return(
    <div
      className=" relative bg-black rounded-xl p-6 md:p-8 flex justify-between items-start shadow-lg ">

      <span className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-[#AA5BFF]" />
      <div className="pl-6 text-white">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-400 mt-2">{descricao}</p>
      </div>
      <span className="text-gray-300 text-sm whitespace-nowrap">
        {data}
      </span>
    </div>
    )
    
}
export default Expecard;