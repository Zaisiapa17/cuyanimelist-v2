import Header from "@/components/AnimeList/Header"
import Card from "../card"
import HandleBack from "@/components/HandleBack"

const Page = () => {    
    return (
        <div className="flex flex-col justify-start w-full">
            <HandleBack/>
            <Header title={"My collection"} link={""} />
            <div className="flex flex-wrap gap-3 justify-center mb-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Page