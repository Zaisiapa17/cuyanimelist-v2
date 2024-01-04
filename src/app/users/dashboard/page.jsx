import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"
import Card from "./card"
import Header from "@/components/AnimeList/Header"

const Page = async () => {

    const user = await authUserSession()

    return (
        <div className="flex sm:flex-row flex-col p-5 gap-5 items-center sm:items-start">
            <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-xl p-6">
                <Image src={user.image} width={200} height={200} className="rounded-full" />
                <h1 className="text-2xl text-slate-900">{user.name}</h1>
                <h1 className="text-xl text-slate-800">{user.email}</h1>
                <div className="flex flex-row gap-2 mt-2">
                    <Link href={"/users/dashboard/collections"} className="bg-color-accent py-2 px-3 rounded-lg hover:bg-amber-300 text-white font-semibold">My Collection</Link>
                    <Link href={"/users/dashboard/comments"} className="bg-color-accent py-2 px-3 rounded-lg hover:bg-amber-300 text-white font-semibold">My Comment</Link>
                </div>
            </div>
            <div className="flex flex-col justify-start w-full">
                <Header title={"My collection"} link={"/users/dashboard/collections"}/>
                <div className="flex flex-wrap gap-3 justify-center mb-3">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>

        </div>
    )
}

export default Page