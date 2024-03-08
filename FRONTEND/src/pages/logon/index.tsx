import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import {LogOut} from 'lucide-react'
import { NavLink } from '../../components/ui/navLink'
import { Input } from '../../components/ui/input'

import Logo from '../../assets/logo.svg'
import MainImg from '../../assets/main.png'

export function Logon() {
  const [id, setId] = useState('')
  const navigate = useNavigate()

  async function handleSingIn(event: FormEvent){
    event.preventDefault()

    try {
      const response = await api.post('sessions', {id})
      
      localStorage.setItem("@rocketseeat::ongId", id)
      localStorage.setItem("@rocketseeat::ongName", response.data.name)

      navigate('/home')      
    } catch (error) {
      alert('Seu Id não foi encontrado')
    }
  }

    return (
      <div className='w-full max-w-[1120px] h-[100vh] my-0 mx-auto flex flex-col items-center justify-center lg:justify-between lg:flex-row'>
          <section>
            <img src={Logo} alt="Be The Hero" />

            <form onSubmit={handleSingIn} className='mt-24 w-full max-w-[351px]'>
              <h1 className='mt-8 text-[36px] font-medium mb-8'>Faça seu logon</h1>

              <Input type='text' textPlaceholder='Seu ID' value={id} onChange={e => setId(e.target.value)}/>

              <button className='bg-red w-full h-[60px] mt-4 mb-10 rounded-lg text-white text-lg font-bold hover:brightness-90'>Entrar</button>

              <NavLink link='/register' icon={<LogOut color='#E02041'/>} text='Não tenho cadastro' />
            </form>
          </section>

          <img src={MainImg} alt="Pessoas" className='hidden lg:block'/>
      </div>
    )
  }
  