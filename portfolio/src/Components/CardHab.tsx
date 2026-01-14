type habprops = {
    title: string
}

const CardHab = ({title}: habprops) =>{
    return(
        <div className="flex items-center justify-center bg-neutral-900 rounded-lg px-4 py-2 border-l-4 border-purple-500 w-full gap-4">
            <span className="text-white text-sm">
                {title}
            </span>
        </div>
    )
}

export default CardHab;