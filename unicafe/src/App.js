import React, { useState } from 'react';

const Statistics = (props) => {
  const { good, neutral, bad, all } = props;
  let showStatistic = (good + neutral + bad > 0) ? true : false ;
  if (showStatistic) {
    return (
      <div>
        <h2>statistics</h2>
        <StatisticLine statisticText="Good" statistic={good}/>
        <StatisticLine statisticText="Neutral" statistic={neutral}/>
        <StatisticLine statisticText="Bad" statistic={bad}/>
        <StatisticLine statisticText="All" statistic={all}/>
        <StatisticLine statisticText="Average" statistic={(good - bad) / all}/>
        <StatisticLine statisticText="Positive" statistic={good / all * 100}/>
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <p>no feedback given</p>
    </div>
  )
}

const StatisticLine = (props) => {
  if(props.statisticText === "Positive") {
    return (
      <p>{props.statisticText}: {props.statistic} %</p>
    )
  }
  return (
    <p>{props.statisticText}: {props.statistic}</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}> {props.buttonText} </button>
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
      <Button handleClick={() => setGood(good + 1)} buttonText="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} buttonText="neutral" />      
      <Button handleClick={() => setBad(bad + 1)} buttonText="bad" />      
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  );
}

export default App;
