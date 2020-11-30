import React from 'react'

export const GifContainerItem = ({title, url}) => {
    return (
        <div className = "gif-item">
            <img src ={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
