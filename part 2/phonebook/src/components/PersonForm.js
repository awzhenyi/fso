import React from 'react'

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
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
      
    return (
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
    )

}

export default PersonForm;