import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => (
  <h1>
    {text}
  </h1>
)

const Text = ({ text }) => (
  <p>
    {text}
  </p>
)

const MostVotes = ({ votes,anecdotes }) => {
  const max = votes.indexOf(Math.max(...votes))
  return (
    <Text text={anecdotes[max]} />
  )
}

const Button = ({ onClick,text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const Statistic = ({ text, value }) => (
  <tr>
    <td> {text} </td>
    <td> {value} </td>
  </tr>
)

const Statistics = (props) => {

  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <Statistic text={'good'} value={props.good} />
      <Statistic text={'neutral'} value={props.neutral} />
      <Statistic text={'bad'} value={props.bad} />
      <Statistic text={'all'} value={props.total} />
      <Statistic text={'average'} value={props.total/3} />
      <Statistic text={'positive'} value={(props.good/props.total)*100 + '%'} />
    </div>
  )
}

const Votes = ({ number }) => (
  <div>
    {'has ' + number +' votes'}
  </div>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(6).fill(0))

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  let total = good + bad + neutral

  const handleanecdote = () => {
    const copy = [...votes]
    copy.splice(selected,1,copy[selected]+1)
    setVotes(copy)
  }

  return (
    <div>
      <Header text={'give feedback'} />
      <Button onClick={() => setGood(good+1)} text={'good'} />
      <Button onClick={() => setNeutral(neutral+1)} text={'neutral'} />
      <Button onClick={() => setBad(bad+1)} text={'bad'} />
      <Header text={'statistics'} />
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
      <br/>
      <Header text={'Anecdote of the Day'} />
      <Text text={anecdotes[selected]} />
      <Votes number={votes[selected]} />
      <Button onClick={handleanecdote} text={'vote'} />
      <Button onClick={() => setSelected(Math.floor(Math.random() * 6))} text={'next anecdote'} />
      <Header text={'anecdote with the mot votes'} /> 
      <MostVotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)