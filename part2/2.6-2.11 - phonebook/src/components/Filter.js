import { useState } from "react";

const Filter = ({ handleFilter }) => {
  const [filter, setFilter] = useState("");

  const sendPerson = (param) => {
    handleFilter(param);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    sendPerson(event.target.value);
  };

  return (
    <>
      filer shown with <input value={filter} onChange={handleFilterChange} />
    </>
  );
};

export default Filter;
