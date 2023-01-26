import { useState } from "react"

const Button = (props) => {
  console.log(props)
  return(

    <button onClick={props.handelClick}>{props.text}</button>
    
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handelClick={() => setGood(good + 1)} text='good'/>
      <Button handelClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handelClick={() => setBad(bad + 1)} text='bad'/>
      <h1>Statistics</h1>
      <div>good {good}</div>   
      <div>neutral {neutral}</div>   
      <div>bad {bad}</div>   
    </div>
  )
}

export default App;
