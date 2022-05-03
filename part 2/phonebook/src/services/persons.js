import axios from 'axios'

const baseUrl = "/api/persons"

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (obj) => {
    return axios.post(baseUrl, obj)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export {
    getAll,
    create,
    update,
    deletePerson
}