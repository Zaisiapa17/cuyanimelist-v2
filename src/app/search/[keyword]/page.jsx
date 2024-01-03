import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse } from "@/libs/api-libs"

const Home = async ({ params }) => {
    console.log(params.keyword)

    const {keyword} = params
    const decodedKeyword = decodeURI(keyword)

    const animePopular = await getAnimeResponse("anime", `q=${decodedKeyword}`)
    
    return (
        <>
            <section>
                <Header title={`pencarian untuk ${decodedKeyword}...`} link={""} />
                <AnimeList api={animePopular} />
            </section>
        </>
    )
}

export default Home