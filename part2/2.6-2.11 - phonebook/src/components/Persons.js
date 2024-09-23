const Persons = ({ persons, deletePerson }) => {
  // const course = props.course
  // console.log(persons)
  return (
    <div>
      {persons.map((person, i) => (
        <div key={i}>
          {person.name} {person.number} <button onClick={() => deletePerson(person.id)}> delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
