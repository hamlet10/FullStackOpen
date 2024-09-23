import { useState, useEffect } from "react";
import axios from "axios";
import personService from "./services.js/person";
import Persons from "./components/Persons";
import Form from "./components/Form";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
    // axios.get('http://localhost:3001/persons')
    // .then(response => setPersons(response.data))
  }, []);

  const addContact = (NuPerson) => {
    console.log(NuPerson);
    if (persons.some((person) => person.name === NuPerson.name)) {
      alert(`${NuPerson.name} ya esta en la lista`);
    } else {
      const newCotact = NuPerson;
      personService.create(NuPerson).then((response) => {
        setPersons(persons.concat(response.data));
      });
      // setPersons(persons.concat(newCotact));
    }
    console.log(persons);
  };

  const deletePerson = (id) => {
    const person = persons.filter(p => p.id === id)
    console.log(person);
    if (window.confirm(`Deseas eliminar a ${person[0].name}`)) {
      personService.remove(id).then((response) => {
        window.alert(`${response.data.name} borrado exitosamente`)
      });
    }
  };

  const handleFilterChange = (param) => {
    const withFilter = persons.filter((persons) =>
      persons.name.toLocaleLowerCase().includes(param.toLocaleLowerCase())
    );
    setPersons(withFilter);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilterChange} />
      <Form handlePerson={addContact} />
      <h2>Numbers</h2>
      <Persons persons={persons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
