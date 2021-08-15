import React from 'react';

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

export default Course