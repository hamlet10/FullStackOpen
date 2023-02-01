import Part from "./Part";

const Content = (props) => {

    const courses = props.parts

    return (
        <div>
            <Part name={courses[0].name} exercises={courses[0].exercises} />
            <Part name={courses[1].name} exercises={courses[1].exercises} />
            <Part name={courses[2].name} exercises={courses[2].exercises} />
        </div>
    )
}

export default Content;