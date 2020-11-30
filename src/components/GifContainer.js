import React, { useEffect, useState } from 'react'
import { GifContainerItem } from './GifContainerItem';
import {getGifs} from '../helpers/GetGifs'

export const GifContainer = ({term}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(term)
            .then(setImages);  
    }, [term])

    


    return (
        <>
            <h2>{ term }</h2>
            <div className = "gif-container">
                {
                    images.map(img => {
                        return (
                            <GifContainerItem 
                            key= {img.id} 
                            {...img}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
