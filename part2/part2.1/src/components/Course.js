import React from 'react'

const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = ({course}) => {
  const content = course.parts.map(part => <Part key={part.id} part={part.name} exercise={part.exercises} />)

  return (
    <>
      {content}
    </>
  )
}

const Total = ({course}) => {
  const parts = course.parts.map(part => part.exercises)

  return (
    <p>
      <b>
        Total of {parts.reduce((p,s) => p + s)} exercises
      </b>
    </p>
  )
}

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
)

export default Course