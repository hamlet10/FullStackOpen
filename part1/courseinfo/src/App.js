import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const App = () => {
  const course = 'Half Stack application development',
    parts = [
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
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </>
  )
}

export default App;
