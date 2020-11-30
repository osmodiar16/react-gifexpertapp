import React, { useState } from 'react'

export const SearchBar = ({setSearchTerm}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length >2){
            setSearchTerm(inputValue);
            setInputValue('');
        }
    }
    return (
        <>
            <form onSubmit = { handleSubmit } >
                <input 
                    type = 'text'
                    value = {inputValue}
                    onChange = {handleChange} 
                />
            </form>
        </>
    )
}
