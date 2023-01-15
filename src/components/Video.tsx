import { Player, Youtube, DefaultUi } from "@vime/react";
import {GithubLogo, LinkedinLogo,CaretRight,SpotifyLogo,YoutubeLogo} from "phosphor-react";
import { gql, useQuery } from "@apollo/client";

import '@vime/core/themes/default.css';
 

const GET_MUSIC_BY_SLUG_QUERY = gql`
  query GetMusicBySlug ($slug: String) {
    music(where: {slug: $slug}) {
      title
      videoId
      description
      artista {
        bio
        name
        avatarUrl
        youtubeUrl
        spotifyUrl
      }
    }
  }
`

interface GetMusicBySlugResponse{
  music: {
    description: string;
    title: string;
    videoId: string;
    artista: {
      bio: string;
      name: string;
      avatarUrl: string;
      youtubeUrl: string;
      spotifyUrl: string;
    }
  }
}

interface VideoProps{
  musicSlug: string;
}


export function Video(props: VideoProps) {
  const { data } = useQuery<GetMusicBySlugResponse>(GET_MUSIC_BY_SLUG_QUERY, {
    variables: {
      slug: props.musicSlug,
    }
  });

  if(!data){
    return(
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return(
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh]
         aspect-video">
          <Player>
            <Youtube videoId={data.music.videoId}/>
            <DefaultUi />
          </Player>
         </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex gap-16 items-start">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.music.title}
            </h1>
            <div className="flex items-center gap-4 mt-6">
              <img 
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.music.artista.avatarUrl}
                alt='' />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {data.music.artista.name}
                </strong>
                <span className="text-sm text-gray-200 block">
                  {data.music.artista.bio}
                </span>
              </div>
            </div>
            <p className="text-gray-200 mt-4 leading-relaxed">
              {data.music.description}
            </p>

          </div>
          <div className="flex flex-col gap-4">
            <a href={data.music.artista.spotifyUrl} target="_blank"
            className="p-4 text-small bg-green-500
              flex items-center rounded font-bold uppercase gap-2
              justify-center hover:bg-green-700 transition-colors">
                <SpotifyLogo size={24} />
                Perfil do Spotify
            </a>
            <a href={data.music.artista.youtubeUrl} target="_blank"
            className="p-4 text-small border border-blue-500
              flex items-center rounded font-bold uppercase gap-2
              justify-center text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors">
                <YoutubeLogo size={24}/>
                Acesse o canal do artista
            </a>
          </div>
        </div>


        <div className="gap-8 mt-20 grid grid-cols-2">
          <a href="https://github.com/AdimarSarkis" target="_blank"
           className="bg-gray-700 overflow-hidden rounded
            flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <GithubLogo size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">
                  Github
                </strong>
                <p className="text-sm text-gray-200 mt-2">
                  Acesse o meu perfil do github para visualizar outros projetos
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24} className='items-center'/>
              </div>
          </a>

          <a href="linkedin.com/in/adimar-sarkis-21b3a6239/" target="_blank"
          className="bg-gray-700 overflow-hidden rounded
            flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
              <LinkedinLogo size={40}/>
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">
                  Linkedin
                </strong>
                <p className="text-sm text-gray-200 mt-2">
                  Entre no meu linkedin e conecte-se comigo
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24}/>
              </div>
          </a>

        </div>
      </div>

    </div>
  )
}