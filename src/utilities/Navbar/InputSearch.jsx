"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {

    const searchRef = useRef()
    const routrer = useRouter()

    const handleSearch = (e) => {
        e.preventDefault()
        
        if (searchRef.current.value) {
            routrer.push(`/search/${searchRef.current.value}`)
        }
    }
    
    return (
        <div className="bg-white flex flex-row justify-center items-center rounded-md px-3 py-1">
            <input
                placeholder="cari anime..."
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                ref={searchRef}
            />
            <button onClick={handleSearch}>
                <MagnifyingGlass size={32} color="#545454"/>
            </button>
        </div>
    )
}

export default InputSearch