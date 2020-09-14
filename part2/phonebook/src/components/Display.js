import React from 'react'

const Display = ({ persons }) => {

    return (
        <div>
            {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
        </div>
    )
}

export default Display