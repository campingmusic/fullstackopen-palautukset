import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'
import './index.css';




const Curriculum = ({courses}) => {
    const courseItems = () => courses.map( course =>
     <Course 
        key={course.id}
        course={course}
     />
    )
     return(
        <div>
            <h1>Web Development Curriculum</h1>
            {courseItems()}
        </div>   
    )
}

const App = () => {
  const courses = [
    {
    id:1,
    name: 'Half Stack application development',
    parts: [
        {
            id:1,
            name:'Fundamentals of React',
            exercises:10
        },
        {
            id:2,
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            id:3,
            name: 'State of a component',
            exercises: 14
        },
        {
            id:4,
            name: 'In an Expanded field',
            exercises: 2
        }
       ]
     },
     {
        id:2,
        name: 'Node.js',
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
        <div>
        <Curriculum courses={courses} />
        </div>
      )
}
   

ReactDOM.render(<App />, document.getElementById('root'));
