import React from 'react';


const Header = (props) => {
    return(
        <h2>
            {props.course}
        </h2>
    )
}

const Part = ({part}) => {
  return(
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({parts}) => {
 
      const rows = () => parts.map(part =>
        <Part
        key= {part.id}
        part={part}
        />
        )
        return(
            <div>
                {rows()}
            </div>
        )
 
}

const Total = ({parts}) => {
    const totalAmount = parts.reduce((sum,part) => sum + part.exercises, 0)
  return(
    <p><b>Total of {totalAmount} exercises</b></p>
  )
}

const Course = ({course}) => {
    return(
        <div className="course">
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course