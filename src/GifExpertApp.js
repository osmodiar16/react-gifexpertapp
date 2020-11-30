import React, { useState } from 'react'
import { GifContainer } from './components/GifContainer'
import { SearchBar } from './components/SearchBar'

const GifExpertApp = () => {

    const [searchTerm, setSearchTerm] = useState('goku')
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <SearchBar setSearchTerm = {setSearchTerm} />
            <hr />

            <GifContainer term = {searchTerm}/>
            
            

        </>
    )
}


export default GifExpertApp
