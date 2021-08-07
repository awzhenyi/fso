import React, { useState } from 'react';

const Statistics = (props) => {
  const { good, neutral, bad, all } = props;
  return (
    <div>
      <h2>statistics</h2>
      <p>Good: {good} </p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      <p>All: {all}</p>
      <p>Average: {(good - bad) / all} </p>
      <p>Positive: {good / all * 100}  %</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  );
}

export default App;
