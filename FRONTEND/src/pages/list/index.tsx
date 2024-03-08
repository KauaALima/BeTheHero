import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import { Power, Trash2 } from 'lucide-react'
import { Title } from '../../components/ui/title'
import Logo from '../../assets/logo.svg'

interface Incidents {
    id: number;
    title: string;
    description: string;
    value: string;
}


export function List(){
    const [incidents , setIncidents] = useState<Incidents[]>([])

    const ongId = localStorage.getItem('@rocketseeat::ongId')
    const ongName = localStorage.getItem('@rocketseeat::ongName')

    const navigate = useNavigate()

    function handleHome(){
        localStorage.clear()
        navigate('/')
    }


    useEffect(() => {
        async function fetchIncidents() {
            const response = await api.get('profile', {headers: {Authorization: ongId,}})
            setIncidents(response.data)   
        }

        fetchIncidents()
    }, [ongId]);

    function handleNavigate(){
        navigate('/new')
    }


    async function handleRemove(id: any){
        const confirm = window.confirm('Deseja excluir a nota?')

        if(confirm){
           await api.delete(`incidents/${id}`, {headers: {
            Authorization: ongId,
           }})

           setIncidents(incidents.filter(incident => incident.id !== id))
        } else{
            alert('error')
        }
    }

    return(
        <div className="w-full max-w-[1120px] h-[100vh] my-0 mx-auto">
            <header className='w-full flex flex-col gap-6 justify-between mt-8 md:flex-row md:gap-0'>
                <div className='flex justify-center items-center gap-12'>
                    <img src={Logo} alt="Be The Hero" className='w-36 h-[62px]'/>
                    <span>Bem vinda, {ongName}</span>
                </div>

                <div className='flex gap-6 items-center justify-center'>
                    <button onClick={handleNavigate} className='bg-red w-[262px] h-[60px] rounded-lg text-white text-lg font-bold outline-none hover:brightness-90'>Cadastrar novo caso</button>
                    <button onClick={handleHome} className='p-[18px] border border-borderInput rounded-lg hover:brightness-90'><Power color='#E02041' /></button>
                </div>
            </header>

            <main className='flex flex-col gap-8 mt-20 items-center md:items-stretch'>
                <Title text='Casos cadastrados'/>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    {
                        incidents.map(incident => {
                            return (
                                <div key={incident.id} className='w-full max-w-[543px] bg-white rounded-lg relative'>
                                <div className='flex flex-col gap-8 p-8'> 
                                    
                                    <div className='flex flex-col gap-4'>
                                        <strong className='text-sm'>CASO:</strong>
                                        <span className='text-textGray text-lg'>{incident.title}</span>   
                                    </div>
                    
                                    <div className='flex flex-col gap-4'>
                                        <strong className='text-sm'>DESCRIÇÃO:</strong>
                                        <span className='text-textGray text-lg'>{incident.description}</span>   
                                    </div>
                    
                                    <div className='flex flex-col gap-4'>
                                        <strong className='text-sm'>VALOR:</strong>
                                        <span className='text-textGray text-lg'>{`R$ ${incident.value} reais`}</span>   
                                    </div>
                                    
                                    <button onClick={() => handleRemove(incident.id)}>
                                        <Trash2 color="#A8A8B3" className="absolute top-6 right-6 cursor-pointer"/>
                                    </button>
                                </div>
                            </div> 
                            )
                        })
                    }
                </div>
                   
            </main>
        </div>
    )
}