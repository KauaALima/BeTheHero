
interface TitleProps {
    text: string
}

export function Title({text}:TitleProps){
    return(
        <strong className="text-[36px] font-medium">{text}</strong>        
    )
}