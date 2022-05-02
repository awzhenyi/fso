const { request } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

morgan.token('requestBody', (request) => {
  if (request.method === 'POST') {
    return JSON.stringify(request.body)
  }
  return ''
})
app.use(morgan(':method :url :status :response-time ms :requestBody'))

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]



app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  if (persons.filter((person) => person.id === id).length === 0) {
    return response.status(400).json({
      error_code: "400",
      error: "invalid id, no entry with the given id exists"
    })
  }
  persons = persons.filter((person) => person.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(person => person.id))
    : 0
  const person = request.body

  if(person.content === null) {
    return response.status(400).json({
      error_code: "400",
      error: "missing content"
    })
  }

  if(persons.filter((p) => p.name === person.name).length > 0) {
    return response.status(400).json({
      errorCode: "400",
      error: "name already exists, must be unique"
    })
  }

  person.id = Math.floor(Math.random() * 10 + maxId)
  persons = [...persons, person]
  response.json(person)
})

app.get('/info', (request, response) => {
  const currentDate = new Date().toLocaleString();
  response.send(
    `<div>
      <p>Phonebook has info for ${persons.length} people</p>
      <p>${currentDate}</p> 
    </div>`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
