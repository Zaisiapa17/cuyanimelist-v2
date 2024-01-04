"use client"

import { ArrowSquareLeft } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"

const HandleBack = () => {

    const router = useRouter()
    
    return (
        <button type="button" onClick={() => router.back()}>
            <ArrowSquareLeft size={30} />
        </button>
    )
}

export default HandleBack