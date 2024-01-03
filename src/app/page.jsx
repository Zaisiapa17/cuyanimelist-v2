import AnimeList from '@/components/AnimeList'
import Header from '@/components/AnimeList/Header'
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from '@/libs/api-libs'

export default async function Home() {

    const animePopular = await getAnimeResponse("top/anime", "limit=8")

    let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
    recommendedAnime = reproduce(recommendedAnime, 8)
    console.log(recommendedAnime)

    
    return (
        <>
        {/* anime animePopular */}
        <section>
            <Header title={"Anime Popular"} link={"/popular"}/>
            <AnimeList api={animePopular}/>
        </section>
        {/* anime Terbaru */}
        <section>
            <Header title={"Rekomendasi"} link={"/new"}/>
            <AnimeList api={recommendedAnime}/>
        </section>
        </>
    )
}
