import React, { useState } from 'react'

const PersonForm = ({ persons,setPersons }) => {

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const handleNewName = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
        console.log(newName)
      }
    const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
    }
    
    const addPerson = (event) => {
        event.preventDefault()
        const Person = {
            name: newName,
            number: newNumber
        }

        if ((persons.findIndex(person => person.name === Person.name)) === -1) {
            setPersons(persons.concat(Person))
            setNewName('')
        }
        else {
            window.alert(`${Person.name} is already added to phonebook`)
            setNewName('')
        }
    }

    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
    )
}

export default PersonForm