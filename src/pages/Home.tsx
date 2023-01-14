import {Logo} from '../components/Logo';
import { Link } from 'react-router-dom';
import { MusicNotesSimple } from 'phosphor-react';

export function Home(){
  return(
    <main className='flex flex-1 items-center justify-evenly
      w-full h-screen bg-gray-700'>
      
      <div className='banner'>
        <Logo lugar={'home'} />
      </div>
      
      <div className="p-1">
        <strong className='font-sans text-5xl banner text-gray-50 mx-2'>
          Músicas Favoritas
        </strong>
        <p className='text-xl py-2'>
          Minhas músicas favoritas utilizando o GraphQL
        </p>        

        <Link to='/music' className='p-4 text-small bg-green-500
              flex items-center rounded font-bold uppercase gap-2
              justify-center hover:bg-green-700 transition-colors'>
          <MusicNotesSimple size={32} weight="thin" />
          VER MÚSICAS
      
        </Link>
      </div>
    </main>
  )
}