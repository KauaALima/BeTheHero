import { ReactElement } from 'react'
import {Link} from 'react-router-dom'

interface NavLinkProps {
    icon: ReactElement
    text: string
    link?: string
}

export function NavLink({icon,text,link}:NavLinkProps){
    return(
        <Link to={link} className='flex gap-5 text-lg font-bold'>
            {icon}
            {text}
        </Link>
    )
}