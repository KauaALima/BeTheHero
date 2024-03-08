import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    textPlaceholder: string
}

export function Input({textPlaceholder, ...rest}:InputProps){
    return(
        <input {...rest}
          placeholder={textPlaceholder}
          className='w-full h-[60px] py-5 px-6 text-lg outline-none rounded-lg border border-borderInput'
        />
    )
}