import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p> {props.name} {props.exercises}</p>
  )
}

const Content = ( {data} ) => {
  return (
    data.map(parts => <Part name={parts['name']} exercises={parts['exercises']} />)
  )
}


const Total = (props) => {

  return (
    <p> Number of exercises: {props.total} </p>

  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 142
    }
  ]

  return (
    <div>
      <Header course = {course} />
      <Content data = {parts} />
      <Total total = {parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App
