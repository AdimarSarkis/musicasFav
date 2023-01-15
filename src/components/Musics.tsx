import {CheckCircle, Lock} from 'phosphor-react'
import { Link } from 'react-router-dom';


interface MusicProps {
  title: string;
  slug: string;
  avatarUrl:string;
  name: string;
}



export function Musics(props: MusicProps){
const isLessonAvailable = true;
  return(
    <Link to={`/music/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {props.name}
      </span>

      <div className="rounded border group-hover:border-green-500 border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium
              flex gap-2 items-center">
              <CheckCircle size={20}/>
              Conteudo liberado
            </span>
          ): (
            <span className="text-sm text-orange-500 font-medium
              flex gap-2 items-center">
            <Lock size={20}/>
            Em breve
          </span>
          )}
          <span className="text-xs rounded px-2 py-[0.125rem]
          font-bold border border-green-300 text-white">
            Ao vivo
          </span>
        </header>

        <strong className="text-gray-300 mt-5 block">
          {props.title}
        </strong>
      </div>
    </Link>
  )
}