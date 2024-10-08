// anekdootit, 1.12* - 1.14* done

// imports
import { useState } from 'react'


// Basic Button
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

// Best anecdote 
const BestAnecdote = ({ anecdotes, points }) => {
  const maxPoints = Math.max(...points)
  const bestAnecdote = anecdotes[points.indexOf(maxPoints)]
  console.log("max points are now", maxPoints)

  if (maxPoints === 0)
    return (
      <p>you haven't voted yet</p>
    )

  return (
    <div>
      <p>{bestAnecdote}</p>
      <p>has {maxPoints} votes</p>
    </div>
  )
}

// The App
const App = () => {
  // Data
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // Random Number generator
  const randomNumber = () => {
    const rnd = Math.floor(Math.random() * anecdotes.length)
    console.log("random number is", rnd)
    return rnd
  }

  // Random anecdote
  const [selected, setSelected] = useState(randomNumber)

  const randomAnecdote = () => {
    setSelected(randomNumber())
  }

  // Vote anecdote, give it a point(s)
  const [points, setVotes] = useState(Array(anecdotes.length).fill(0))

  const voteAnecdote = () => {
    const copy = [...points]
    copy[selected] += 1
    setVotes(copy)
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>      
      <p>has {points[selected]} votes</p>
      <Button handleClick={voteAnecdote} text="vote" />
      <Button handleClick={randomAnecdote} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <BestAnecdote anecdotes={anecdotes} points={points} />
    </div>
  )
}


// DONT DELETE
export default App
