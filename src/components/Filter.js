import { useState } from "react";

const Filter = () => {
  const arrayA = [
    { title: "Eggs", desc: "They are good" },
    { title: "Milk", desc: "It is white" },
  ];
  const arrayB = [
    { title: "Cucumbers", desc: "They are long" },
    { title: "Carrots", desc: "They are orange" },
  ];

  const [searchTerm, setSearchTerm] = useState(null);
  const [dairy, setDairy] = useState(arrayA);
  const [veggies, setVeggies] = useState(arrayB);

  function handleSearch(event) {
    setSearchTerm(event.target.value);

    const result = arrayA.filter((item) => item.includes(searchTerm));
    console.log("result", result);
  }

  return (
    <div>
      <input onChange={handleSearch} type="text" />
    </div>
  );
};

export default Filter;
