import React from 'react'

const Header = ( {name} ) => {
  return (
    <h1>{ name }</h1>
  )
}

const Part = ( {partsName, partsExercises} ) => {
  return (
    <p> {partsName} {partsExercises} </p>
  )
}

const Content = ( {parts} ) => {
  return (
    <div>
      {parts.map(part =>
        <div key={part.id}>
          <Part partsName={part.name} partsExercises={part.exercises}/>
        </div>
      )}
    </div>
  )
}


const Total = ( {parts} ) => {
  return (
    <p> 
    Number of exercises: {parts.reduce((accumulator, currentValue) => (accumulator + currentValue.exercises), 0)}
    </p>
  )
}

const Course = ( {courses} ) => {
  return (
    <div>
      {courses.map(course => 
        <div key={course.id}>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
        </div>
      )}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return ( 
    <Course courses={courses} />
  )
}

export default App
