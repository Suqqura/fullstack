// 1.7
import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good - bad)  / total 
  const positive = (good / total) * 100

  return (
    <div>
      <h1>Give Feedback!</h1>

      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <h1>Statistics</h1>

      <p>good:    {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad:     {bad}</p> 
      <p>all:     {total}</p> 
      <p>average: {average}</p> 
      <p>positive: {positive} %</p> 
    </div>
  )
}




// DON'T DELETE
export default App
