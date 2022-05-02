import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import { mapJsonToPersons } from './components/DataModel'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    axios
    .get("http://localhost:3001/api/persons")
    .then(response => {
      console.log(response.data)
      setPersons(mapJsonToPersons(response.data))
    })
  },[])

  return (
    <div>
      <h1>Phonebook</h1>
      {successMessage !== null ? 
        <div className="message">{successMessage}</div>
        : null}
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
        setSuccessMessage={setSuccessMessage}
      />
      <h2>Numbers</h2>
      {persons.filter((person)=>person.name.toLowerCase().includes(newFilter)).map((person)=>
      <Persons
        key={person.id}
        id={person.id}
        personName={person.name}
        personNumber={person.number}
        persons={persons}
        setPersons={setPersons}
        setSuccessMessage={setSuccessMessage}
      />
      )}
    </div>
  )
}

export default App
