import { Star } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="flex flex-wrap gap-3 justify-center mb-3">
            {
                api.data?.map((anime, index) => {
                    return (
                        <Link href={`/${anime.mal_id}`} key={index}>
                            <div className="w-40 sm:w-52  sm:h-96 rounded overflow-hidden shadow-md bg-white mt-2 hover:text-color-accent hover:scale-105 transition-all">
                                <div className='w-full h-52 sm:h-72 overflow-hidden'>
                                    <Image className="w-full h-52 sm:h-full object-cover transition-all" src={anime.images.webp.image_url} width={200} height={200} alt="Sunset in the mountains" />
                                </div>
                                <div className="px-3 py-2">
                                    <h3 className="font-bold mb-1 custom-card">{anime.title}</h3>
                                </div>
                                <div className="px-3 pb-2 flex flex-wrap justify-between items-center">
                                    <span className="bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{anime.year}</span>
                                    <div className="flex gap-1 items-center text-sm font-semibold text-gray-700 mb-2">
                                        <div className='text-amber-400'>
                                            <Star size={20} />
                                        </div>
                                        {anime.score}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
                )
            }
        </div>
    )
}

export default AnimeList