
import { NavLink } from '../../components/ui/navLink'
import { Input } from '../../components/ui/input'
import { Title } from '../../components/ui/title'
import { FormEvent, useState } from 'react'

import {ArrowLeft} from 'lucide-react'
import Logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

export function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsApp, setWhatsApp] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')

    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    async function handleRegisterOng(event: FormEvent){
        event.preventDefault()

        if(!name || !email || !whatsApp || !cidade || !uf){
           return alert("preencha todos os campos")
        }

        const data = {
            name,
            email,
            whatsApp,
            cidade,
            uf
        }

        try{
            const response = await api.post('ongs', data)

            alert(`Seu ID é ${response.data.id}`)

        }catch(error){
            alert('Erro no cadastro')
        }

        handleBack()
    }

    return(
        <div>
            <div className="w-full max-w-[1120px] h-[100vh] my-0 mx-auto flex items-center justify-between">
                <div className='w-full p-24 flex flex-col items-center justify-between shadow-3xl md:flex-row '>
                    <section className='w-full max-w-96 '>
                        <img src={Logo} alt="Be The Hero" className='mb-16 w-[191px]'/>

                        <div className='flex flex-col gap-8 mb-20'>
                            <Title text='Cadastro'/>
                            <p className='text-lg font-normal text-textGray'>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                        </div>

                        <NavLink link='/' icon={<ArrowLeft color='#E02041'/>} text='Voltar para o logon' />
                    </section>

                    <form onSubmit={handleRegisterOng} className='flex flex-col gap-2 w-full max-w-[448px] mt-7 md:mt-0'>
                        <Input type='text' textPlaceholder='Nome da ONG' value={name}  onChange={e => setName(e.target.value)}/>
                        <Input type='email' textPlaceholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                        <Input type='number' textPlaceholder='WhatsApp' value={whatsApp} onChange={e => setWhatsApp(e.target.value)}/>

                        <div className='flex gap-2 w-full'>
                            <div className='w-[370px] border'>
                                <Input type='text' textPlaceholder='Cidade' value={cidade} onChange={e => setCidade(e.target.value)}/>
                            </div>
                            
                            <div className='w-[80px]'>
                                <Input type='text' textPlaceholder='UF' value={uf} onChange={e => setUf(e.target.value)}/>
                            </div>
                        </div>

                        <button className='bg-red w-full h-[60px] rounded-lg text-white text-lg font-bold hover:brightness-90'>Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}