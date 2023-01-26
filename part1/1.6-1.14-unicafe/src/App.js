import { useState } from "react";

const Button = (props) => {
  console.log(props);
  return <button onClick={props.handelClick}>{props.text}</button>;
};

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

  const handelNeultral = () => {
    setAll(all + 1);
    setNeutral(neutral + 1);
  };

  const hanelBad = () => {
    setAll(all + 1);
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handelClick={handelGood} text="good" />
      <Button handelClick={handelNeultral} text="neutral" />
      <Button handelClick={hanelBad} text="bad" />
      <h1>Statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {(good - bad) / all} </div>
    </div>
  );
};

export default App;
