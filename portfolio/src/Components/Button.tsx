type ButtonProps={
    title: String
    variant: "default" | "outline"
}

const Button =({title, variant = "default"}: ButtonProps) => {
    const defaultStyle =
    "w-35 h-12 bg-linear-to-r from-[#AA5BFF] to-[#663699] cursor-pointer px-6 py-2 rounded-full text-black font-medium";
    const outlineStyle =
    "w-35 h-12 bg-linear-to-r from-[#0A66C2] to-[#05305C] cursor-pointer px-6 py-2 rounded-full text-white font-medium";
    const buttonVariant = () => {
        if(variant === "default"){
            return defaultStyle;
        }else{
            return outlineStyle;
        }

    }
    return<button className={buttonVariant()}>{title}</button>;
}

export default Button;