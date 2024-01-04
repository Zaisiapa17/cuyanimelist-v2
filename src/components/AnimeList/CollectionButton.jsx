"use client"

import React, { useState } from 'react'

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
    const [isCreated, setIsCreated] = useState(false)

    const handleCollection = async (event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email, anime_image, anime_title }

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if (collection.isCreated) {
            setIsCreated(true)
        }
        return
    }

    return (
        <>
            {
                isCreated 
                ? 
                <p className='bg-color-accent px-3 py-2 rounded-md'>Ada di Koleksi</p>
                :
                <button
                    onClick={handleCollection}
                    className="bg-color-accent px-3 py-2 rounded-md hover:text-color-primary">
                    Add To Collection
                </button>
                }
        </>
    )
}

export default CollectionButton