import React from 'react'

const Header = (props) => {
  return (
    <h1>{ props.course }</h1>
  )
}
s
const Part = (props) => {
  return (
    <p> {props.name} {props.exercises}</p>
  )
}

const Content = ( {data} ) => {
   
  return (
    <div>
      <Part name={data[0].name} exercises={data[0].exercises} />
      <Part name={data[1].name} exercises={data[1].exercises} />
      <Part name={data[2].name} exercises={data[2].exercises} />
    </div>
  )
}


const Total = (props) => {
  
  return (
    <p> Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
  )
}


const App = () => {
  const course = {
    name:  'Half Stack application development',
    parts: [
      {
      name: 'Fundamentals of React',
      exercises: 110
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
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content data = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App
