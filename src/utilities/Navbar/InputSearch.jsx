"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {

    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword || keyword.trim() == "") return

        if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()    
            router.push(`/search/${keyword}`)
        }
    }
    
    return (
        <div className="bg-white flex flex-row justify-center items-center rounded-md px-3 py-1">
            <input
                placeholder="cari anime..."
                className="mt-1 px-3 py-2 border shadow-sm w-full"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button onClick={handleSearch}>
                <MagnifyingGlass size={32} color="#545454"/>
            </button>
        </div>
    )
}

export default InputSearch