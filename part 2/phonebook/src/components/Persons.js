import React from 'react';
import { deletePerson } from '../services/persons';

const Persons = ({ id, personName, personNumber, persons, setPersons, setSuccessMessage }) => {

    const deleteEntry = () => {
        const res = window.confirm("Do you want to delete this entry?")
        if (!res) 
            return
        deletePerson(id).then(response => {
            console.log(response)
        })
        setSuccessMessage(`Deleted entry of ${personName} : ${personNumber}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
        setPersons(persons.filter(person => person.id !== id))
    }

    return(
        <div className='person'>
         {personName} 
         {personNumber} 
         <button onClick={deleteEntry}>delete</button>
        </div>
    )
}

export default Persons;