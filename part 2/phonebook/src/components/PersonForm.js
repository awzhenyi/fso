import React, { useState } from 'react'
import {create, getAll, update} from '../services/persons'

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber, setSuccessMessage }) => {

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

        if (persons.some(person => person.name === personToAdd.name)) {
            const res = window.confirm(`${newName} already exists to the phonebook, update his/her number?`)
            if (!res)
              return
            for(const person of persons) {
              if(person.name === personToAdd.name) {
                const id = person.id
                update(id, personToAdd)
                getAll().then(response => {
                  setPersons(response.data)
                  setSuccessMessage(`Updated phone number of ${person.name} to ${personToAdd.number}`)
                  setTimeout(() => {
                    setSuccessMessage(null)
                  }, 5000)
                })
                setNewName('')
                setNewNumber('')
              }
            }
        } else {
          create(personToAdd).then(response => {
            setPersons(persons.concat(response.data));
            setSuccessMessage(`Created new entry: ${personToAdd.name} with phone number : ${personToAdd.number}`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
            setNewName('');
            setNewNumber('');  
        })
      }
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