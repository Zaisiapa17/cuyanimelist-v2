import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {

    const user = await authUserSession()

    return (
        <div className="flex sm:flex-row flex-col p-5 gap-5">
            <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-xl p-6">
                <Image src={user.image} width={200} height={200} className="rounded-full" />
                <h1 className="text-2xl text-slate-900">{user.name}</h1>
                <h1 className="text-xl text-slate-800">{user.email}</h1>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="bg-color-accent py-2 px-3 rounded-lg hover:bg-amber-300 text-white font-semibold">My Collection</button>
                    <button className="bg-color-accent py-2 px-3 rounded-lg hover:bg-amber-300 text-white font-semibold">My Comment</button>
                </div>
            </div>
            <div className="flex flex-col justify-start items-center">
                <h1 className="text-2xl text-slate-900">Collection</h1>
                <div className="flex flex-wrap gap-3 justify-center mb-3">
                    <Link href={`/detail/`}>
                        <div className="w-40 sm:w-52 rounded overflow-hidden shadow-md bg-white mt-2 hover:text-color-accent hover:scale-105 transition-all">
                            <div className='w-full h-52 sm:h-64 overflow-hidden'>
                                <Image className="w-full h-52 sm:h-full object-cover transition-all" src="https://placehold.jp/150x170.png" width={100} height={100} alt="Sunset in the mountains" />
                            </div>
                            <div className="px-3 py-2">
                                <h3 className="font-bold mb-1 custom-card">Judul Anime</h3>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/detail/`}>
                        <div className="w-40 sm:w-52 rounded overflow-hidden shadow-md bg-white mt-2 hover:text-color-accent hover:scale-105 transition-all">
                            <div className='w-full h-52 sm:h-64 overflow-hidden'>
                                <Image className="w-full h-52 sm:h-full object-cover transition-all" src="https://placehold.jp/150x170.png" width={100} height={100} alt="Sunset in the mountains" />
                            </div>
                            <div className="px-3 py-2">
                                <h3 className="font-bold mb-1 custom-card">Judul Anime</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Page