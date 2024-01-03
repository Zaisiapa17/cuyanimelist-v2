"use client"

import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse } from "@/libs/api-libs"
import Pagination from "@/utilities/Pagination"
import { useEffect, useState } from "react"

const Home = async () => {

    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async () => {
        const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(populerAnime)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <Header title={`Anime Popular #${page}`} link={""} />
            <AnimeList api={topAnime} />
            <Pagination
                page={page}
                lastPage={topAnime.pagination?.last_visible_page}
                setPage={setPage}
            />
        </>
    )
}

export default Home