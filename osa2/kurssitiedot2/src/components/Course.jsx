// kurssitiedot2, 2.5 done

// Header
const Header = ({ course }) => {
  console.log(course)
  return <h2>{course}</h2>
}

// Part
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

// Content
const Content = ({ parts }) => {
  console.log(parts)
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))} 
    </div>
  )
}

// Total
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
    console.log("total", sum, part)
    return sum + part.exercises
  }, 0)    

  return <p><strong>total of {total} exercises </strong></p>
}

// Course
const Course = ({ course }) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
}


// export
export default Course
