// 1.1 - 1.3 done

// Data 1.4
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
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

// Header
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

// Content
const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))} 
    </div>
  )
}

// Total
const Total = (props) => {
  let total = 0
  props.parts.forEach(part => {
    total += part.exercises
  })
  return <p>Number of exercises {total}</p>
}

// Part
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}


// Always at the end
export default App
