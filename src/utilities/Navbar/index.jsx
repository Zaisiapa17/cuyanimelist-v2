import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <div className="bg-indigo-700 p-6 w-full">
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-2">
                <h1 className='font-bold text-2xl'>CuyAnimeList</h1>
                <InputSearch/>
            </div>
        </div>
    )
}

export default Navbar