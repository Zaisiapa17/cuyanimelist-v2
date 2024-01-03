import AnimeList from '@/components/AnimeList'
import { getAnimeResponse } from '@/libs/api-libs'
import Link from 'next/link'

export default async function Home() {

    const animePopular = await getAnimeResponse("top/anime", "limit=12")

    return (
        <>
            <div className="flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold text-color-primary">Anime populer</h1>
                <Link href={"/populer"} className="md:text-xl text-sm underline hover:text-orange-600 transition-all">
                    lihat semua
                </Link>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
                {
                    animePopular.data.map((anime, index) => {
                        return (
                            <div key={index}>
                                <AnimeList title={anime.title} images={anime.images.webp.image_url} year={anime.year} rating={anime.score} id={anime.mal_id} />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </>
    )
}
