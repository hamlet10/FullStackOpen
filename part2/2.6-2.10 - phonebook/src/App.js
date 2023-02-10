import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addContact = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} ya esta en la lista`);
    } else {
      const newCotact = {
        name: newName,
      };
      setPersons(persons.concat(newCotact));
    }
    setNewName("");
  };

  const handleContactChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleContactChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((persona, i) => (
        <div key={i}>{persona.name}</div>
      ))}
    </div>
  );
};

export default App;
