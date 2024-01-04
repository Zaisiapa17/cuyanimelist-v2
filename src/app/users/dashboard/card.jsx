import Image from "next/image"
import Link from "next/link"

const Card = () => {
    return (
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
    )
}

export default Card