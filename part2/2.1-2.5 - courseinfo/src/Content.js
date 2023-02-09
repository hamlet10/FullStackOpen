import Part from "./Part";

const Content = ({ parts }) => {
  // const courses = props.parts

  return (
    <>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
    </>
  );
};

export default Content;
