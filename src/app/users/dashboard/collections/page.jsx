import Header from "@/components/AnimeList/Header"
import Card from "../card"
import HandleBack from "@/components/HandleBack"
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async () => {    

    const user = await authUserSession();
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email },
    });
    
    return (
        <div className="flex flex-col justify-start w-full">
            <HandleBack/>
            <Header title={"My collection"} link={""} />
            <div className="flex flex-wrap gap-3 justify-center mb-3">
            {collection.map((collect, index) => {
                    return (
                        <Card idAnime={collect.anime_mal_id} image={collect.anime_image} title={collect.anime_title} key={index}/>
                    );
                })}
            </div>
        </div>
    )
}

export default Page