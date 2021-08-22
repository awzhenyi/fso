import React from 'react'

const Filter = ({ newFilter, setNewFilter }) => {

    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }

    const filterPerson = (event) => {
        event.preventDefault();
      }
    
    return (
    <form onSubmit={filterPerson}>
        <input 
        value = {newFilter}
        onChange = {handleFilterChange}
        />
    </form>
    )

}


export default Filter;