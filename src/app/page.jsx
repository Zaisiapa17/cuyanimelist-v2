import AnimeList from '@/components/AnimeList'
import Header from '@/components/AnimeList/Header'
import { getAnimeResponse } from '@/libs/api-libs'

export default async function Home() {

    const animePopular = await getAnimeResponse("top/anime", "limit=8")

    return (
        <>
        {/* anime animePopular */}
        <section>
            <Header title={"Anime Popular"} link={"/popular"}/>
            <AnimeList api={animePopular}/>
        </section>
        {/* anime Terbaru */}
        <section>
            <Header title={"Anime Terbaru"} link={"/new"}/>
            <AnimeList api={animePopular}/>
        </section>
        </>
    )
}
