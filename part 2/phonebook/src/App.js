import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '91234567'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const filterPerson = (event) => {
    event.preventDefault();
    for(const person of persons) {
      if (person.name === newFilter) {
        console.log('exists')
      }
    }

    setNewFilter('')
  }

  const addPerson = (event) => {
    event.preventDefault();
    const personToAdd = {
      name : newName,
      number : newNumber,
    }

    if (persons.some((person) => (person.name===personToAdd.name && person.number===personToAdd.number))) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    setPersons(persons.concat(personToAdd));
    setNewName('');
    setNewNumber('');
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <h2>Filter By</h2>
        <form onSubmit={filterPerson}>
          <input 
            value = {newFilter}
            onChange = {handleFilterChange}
          />
        </form>
      </div>
      <form onSubmit={addPerson}>
        <div>
        <h2>Add New Person</h2>
          name: <input 
            value = {newName}
            onChange = {handleNameChange}
          />
          <div>
            number: <input 
              value = {newNumber}
              onChange = {handleNumberChange}
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => 
        <p>{person.name} {person.number}</p>
      )}
    </div>
  )
}

export default App
