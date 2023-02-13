import Persons from "./components/Persons"
import { useState } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);




  const addContact = (NuPerson) => {
    console.log(NuPerson);
    if (persons.some((person) => person.name === NuPerson.name)) {
      alert(`${NuPerson.name} ya esta en la lista`);
    } else {
      const newCotact = NuPerson
      setPersons(persons.concat(newCotact));
    }
    console.log(persons);
  };


  const handleFilterChange =(param) =>{
     const withFilter = persons.filter(persons => persons.name.toLocaleLowerCase().includes(param.toLocaleLowerCase()))
      setPersons(withFilter)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilterChange}/>
      <Form  handlePerson={addContact}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  );
};

export default App;
