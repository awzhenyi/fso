import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '91234567'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Filter By</h2>
      <Filter 
      newFilter={newFilter}
      setNewFilter={setNewFilter}
      />

      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}

      />
      <h2>Numbers</h2>
      {persons.filter((person)=>person.name.toLowerCase().includes(newFilter)).map((person)=>
      <Persons
        key={person.name}
        personName={person.name}
        personNumber={person.number}
      />
      )}
    </div>
  )
}

export default App
