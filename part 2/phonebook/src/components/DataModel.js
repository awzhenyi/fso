const mapJsonToPersons = (json) => {
    let persons = [];
    json.forEach((person) => {
        const {
            name,
            number
        } = person

        const mappedPerson = {
            name,
            number
        }

        persons.push(mappedPerson);
    })

    return persons;
}

export {mapJsonToPersons}