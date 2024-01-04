import CollectionButton from "@/components/AnimeList/CollectionButton"
import CommentBox from "@/components/AnimeList/CommentBox"
import CommentInput from "@/components/AnimeList/CommentInput"
import HandleBack from "@/components/HandleBack"
import { getAnimeResponse } from "@/libs/api-libs"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import VideoPlayer from "@/utilities/VideoPlayer"
import { Calendar, Star } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

const Home = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()

    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id }
    })

    return (
        <>
            <HandleBack/>
        <div className="pt-4 px-4 flex sm:flex-row gap-5 justify-center flex-col">

            <Image src={anime.data.images.jpg.large_image_url} width={350} height={350} className="mx-auto sm:mx-0" />

            <div className="flex flex-col">
                <div className="flex sm:flex-row flex-col items-center gap-2 justify-center sm:justify-start">
                    <h1 className="text-3xl font-semibold text-slate-800">{anime.data.title}</h1>
                    <div className="flex gap-1 items-center text-gray-700">
                        <div className='text-amber-400'>
                            <Star size={30} />
                        </div>
                        <p className="text-xl font-semibold text-slate-800">
                            {anime.data.score}
                        </p>
                    </div>
                    <div className="w-1/3 flex justify-end">
                        {
                            !collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />
                        }
                    </div>
                </div>
                <div className="flex flex-wrap gap-1 justify-center sm:justify-start mt-3">
                    {anime.data.genres.map((genre, index) => {
                        return (
                            <span className="bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>{genre.name}</span>
                        )
                    })}
                </div>
                <h2 className="text-2xl font-semibold text-slate-700">Sinopsis:</h2>
                <p className="text-slate-600">{anime.data.synopsis}</p>
                <div className="w-full flex items-center justify-center flex-col sm:items-center sm:justify-around sm:flex-row mt-3">
                    <div className="w-full">
                        <div>
                            <div className="font-semibold">
                                detail:
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>type</div>
                                <div className="border-2 border-white border-l-color-accent pl-3"> {anime.data.type}</div>
                            </div>
                            <div>
                                <div>Status</div>
                                <div className="border-2 border-white border-l-color-accent pl-3"> {anime.data.status}</div>
                            </div>
                            <div>
                                <div>Rank</div>
                                <div className="border-2 border-white border-l-color-accent pl-3"> {anime.data.rank}</div>
                            </div>
                            <div>
                                <div>Anggota</div>
                                <div className="border-2 border-white border-l-color-accent pl-3"> {anime.data.members}</div>
                            </div>
                            <div>
                                <div>Episode</div>
                                <div className="border-2 border-white border-l-color-accent pl-3"> {anime.data.episodes}</div>
                            </div>
                        </div>
                    </div>
                    <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
                </div>
                <div className="flex flex-row items-center mt-2 gap-1">
                    <Calendar size={32} color="#5c5c5c" />
                    <p className="text-slate-700 mt-1">{anime.data.aired.string}</p>
                </div>
            </div>
        </div>
        <CommentBox anime_mal_id={id}/>
        {
            user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title}/>
        }
        </>

    )
}

export default Home