import { useState } from "react";

const Form = ({  handlePerson }) => {
    const [newName, setNewName] = useState({name: "", number:""});

  const addPerson =(e) => {
    e.preventDefault();
    handlePerson(newName)
    setNewName({name: "",number: ""});
  }

   const handleContactChange = (event) => {
    const copyPerson = {
      ...newName,
      name: event.target.value
    };

    setNewName(copyPerson);
  };

  const handleNumbertChange = (event) => {
    const copyPerson = {
      ...newName,
      number: event.target.value
    };

    setNewName(copyPerson);
  };

  return (
    <>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName.name} onChange={handleContactChange} />
        </div>
        <div>
          number: <input value={newName.number} onChange={handleNumbertChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default Form;
