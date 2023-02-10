import { logRoles } from "@testing-library/react";
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "" }]);
  const [newName, setNewName] = useState({name: "", number:""});

  const addContact = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName.name)) {
      alert(`${newName.name} ya esta en la lista`);
    } else {
      const newCotact = newName
      setPersons(persons.concat(newCotact));
    }
    console.log(persons);
    setNewName({name: "",number: ""});
  };

  const handleContactChange = (event) => {
    const copyPerson = {
      ...newName,
      name: event.target.value
    };
    console.log(event.target.value);
    setNewName(copyPerson);
  };

  const handleNumbertChange = (event) => {
    const copyPerson = {
      ...newName,
      number: event.target.value
    };
    console.log(copyPerson);
    setNewName(copyPerson);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName.name} onChange={handleContactChange} />
        </div>
        <div>number: <input value={newName.number} onChange={handleNumbertChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((persona, i) => (
        <div key={i}>{persona.name} {persona.number}</div>
      ))}
    </div>
  );
};

export default App;
