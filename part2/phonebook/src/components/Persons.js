import React from 'react'
import Display from './Display'

const Persons = ({ persons }) => {
    return(
        <div>
            <Display persons={persons} />
        </div>
    )
}

export default Persons