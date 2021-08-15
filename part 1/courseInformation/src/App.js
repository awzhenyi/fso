import React from 'react'

const Header = ( {name} ) => {
  return (
    <h1>{ name }</h1>
  )
}

const Part = (props) => {
  return (
    <p> {props.part} </p>
  )
}

const Content = (props) => {
  return (
    <p> {props.content} </p>
  )
}


const Total = (props) => {
  return (
    <p> Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
  )
}

const Course = ( {course} ) => {
  return (
    <div>
      <Header name= {course.name}/>
      {course.parts.map(c => 
      <div>
      <Content content={c.name} />
      <Part part={c.exercises} />
      </div>)}
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
