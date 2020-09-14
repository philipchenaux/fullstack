import React, { useState } from 'react'
import Persons from'./Persons'

const Filter = ({ persons }) => {
    const [ newSearch, setNewSearch ] = useState('')
    const [ search, setSearch ] = useState(persons)

    const handleNewSearch = (event) => {
        console.log(event.target.value)
        setNewSearch(event.target.value)
        console.log(event.target.value)
        console.log(newSearch)

        setSearch(persons.filter(person => person.name.toUpperCase().indexOf(event.target.value.toUpperCase()) !== -1))
    }

    

    return (
        <div>
            <h3>Find:</h3>
                filter shown with <input value={newSearch} onChange={handleNewSearch}/>
            <Persons persons={search} />
        </div>
    )
}

export default Filter