import { FormEvent, useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import {ArrowLeft} from 'lucide-react'

import { NavLink } from '../../components/ui/navLink'
import { Input } from '../../components/ui/input'
import { Title } from '../../components/ui/title'
import Logo from '../../assets/logo.svg'



export function New() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const navigate = useNavigate()
    const ongId = localStorage.getItem('@rocketseeat::ongId')

    function handleBack(){
        navigate(-1)
    }

    async function handleNewNote(event: FormEvent) {
        event.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data , {headers: {Authorization: ongId,}})

            handleBack()
        } catch(error){
            alert('Não foi possviel criar o caso')
        }

        
    }

    return(
        <div>
            <div className="w-full max-w-[1120px] h-[100vh] my-0 mx-auto flex items-center justify-between">
                <div className='w-full p-24 flex flex-col items-center justify-between shadow-3xl gap-9 md:flex-row  md:gap-0'>
                    <section className='w-full max-w-96'>
                        <img src={Logo} alt="Be The Hero" className='mb-16 w-[191px]'/>

                        <div className='flex flex-col gap-8 mb-20'>
                            <Title text='Cadastrar novo caso'/>
                            <p className='text-lg font-normal text-textGray'>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                        </div>

                        <NavLink link='/home' icon={<ArrowLeft color='#E02041'/>} text='Voltar para home' />
                    </section>

                    <form onSubmit={handleNewNote} className='flex flex-col gap-2 w-full max-w-[448px]'>
                        <Input type='text' textPlaceholder='Título do caso' value={title} onChange={e => setTitle(e.target.value)}/>
                        <textarea className='w-full h-[175px] py-5 px-6 text-lg outline-none rounded-lg border border-borderInput' placeholder='Descrição' value={description} onChange={e => setDescription(e.target.value)}/>
                        <Input type='text' textPlaceholder='Valor em reais' value={value} onChange={e => setValue(e.target.value)}/>

                        <div className='flex gap-2 w-full'>
                            <button onClick={handleBack} className='bg-borderInput w-[168px] h-[60px] rounded-lg text-textBlack text-lg font-bold hover:brightness-90'>Cancelar</button>       
                            <button className='bg-red w-[263px] h-[60px] rounded-lg text-white text-lg font-bold hover:brightness-90'>Cadastrar</button>       
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}