const mapJsonToPersons = (json) => {
    let persons = [];
    json.forEach((person) => {
        const {
            name,
            number,
            id
        } = person

        const mappedPerson = {
            id,
            name,
            number
        }
        
        persons.push(mappedPerson);
    })

    return persons;
}

export {mapJsonToPersons}