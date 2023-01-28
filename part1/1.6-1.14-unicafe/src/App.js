import { useState } from "react";

const Button = (props) => {
  console.log(props);
  return <button onClick={props.handelClick}>{props.text}</button>;
};

const Statistics = (prop) => {
  const good = prop.good;
  const neutral = prop.neutral;
  const bad = prop.bad;
  const all = prop.all;

  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticsLine text={'good'} value={good}/>
        <StatisticsLine text={'neutral'} value={neutral}/>
        <StatisticsLine text={'bad'} value={bad}/>
        <StatisticsLine text={'average'} value={isNaN((good - bad) / all) ? 0 : (good - bad) / all}/>
        <StatisticsLine text={'positive'} value={isNaN((good / all) * 100)? 0 + '%' : (good / all) * 100 + '%'} /> 
      </div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <div>No Feedback given</div>
      </div>
    );
  }
};

const StatisticsLine = (props) => {
  const text = props.text;
  const value = props.value;

  return(
    <div>{text}: {value}</div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handelGood = () => {
    setAll(all + 1);
    setGood(good + 1);
  };

  const handelNeutral = () => {
    setAll(all + 1);
    setNeutral(neutral + 1);
  };

  const handelBad = () => {
    setAll(all + 1);
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handelClick={handelGood} text="good" />
      <Button handelClick={handelNeutral} text="neutral" />
      <Button handelClick={handelBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

export default App;
