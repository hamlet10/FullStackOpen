const Persons = ({persons}) => {
    // const course = props.course
    // console.log(persons)
    return (
        <div>
            {persons.map((person, i) => <div key={i}>{person.name} {person.number}</div>)}
        </div>
    )
}

export default Persons;