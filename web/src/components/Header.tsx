import habitsWebLogo from '../assets/habitsWebLogo.svg'
import { Plus } from 'phosphor-react'

export default function Header(){
return (
<div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
    <img src={habitsWebLogo} alt="logo"/>
    <button
    type='button'
    className='border border-violet-500 font-semibold rounded-md px-6 py-4 flex items-center gap-3 hover:border-violet-300'
    >
      <Plus size={20} className="text-violet-500"/>
      Novo hábito
    </button>
</div>

)}
