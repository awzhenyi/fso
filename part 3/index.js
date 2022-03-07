const express = require('express')
const app = express()
app.use(express.json())

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
  persons = persons.filter((person) => person.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(person => person.id))
    : 0
  const person = request.body

  if(!person.content) {
    return response.status(400).json({
      error: "missing content"
    })
  }

  if(persons.filter((p) => p.name === person.name).length > 0) {
    return response.status(400).json({
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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
