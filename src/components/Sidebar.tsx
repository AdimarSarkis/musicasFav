import { Musics } from './Musics';
import { gql,useQuery } from "@apollo/client"

interface GetMusicsQueryResponse {
  musics: {
    id: string;
    title: string;
    slug: string;
    avatarUrl: string;
    name: string;
    
  }[];

}

const GET_MUSICS_QUERY = gql`
  query {
    musics(stage: PUBLISHED){
      id
      title
      videoId
      slug
      description
      artista {
        avatarUrl
        name
      }
    }
  }
`

export function Sidebar(){
  const {data} = useQuery<GetMusicsQueryResponse>(GET_MUSICS_QUERY)

  return(
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600"> 
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 
      block">
        Playlist de músicas
      </span>

      <div className="flex flex-col gap-8">
        {data?.musics.map(music => {
          return(
            <Musics key={music.id}
              title={music.title}
              slug={music.slug}
              name={music.name}
              avatarUrl={music.avatarUrl}
            />
          )
          })
        }
      
        
      </div>
    </aside>
  )
}