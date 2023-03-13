import { useState } from "react";

const Filter = ({ arr }) => {
  // const arrayA = [
  //   { title: "Eggs", desc: "They are good" },
  //   { title: "Milk", desc: "It is white" },
  // ];
  // const arrayB = [
  //   { title: "Cucumbers", desc: "They are long" },
  //   { title: "Carrots", desc: "They are orange" },
  // ];

  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  function handleSearch(event) {
    const searchTermVar = event.target.value;

    //try to replace state var with regular variable
    setSearchTerm(searchTermVar);

    const result = arr.filter(
      (item) =>
        item.className.includes(searchTermVar) ||
        item.classDescription.includes(searchTermVar)
    );
    console.log("Sterm", searchTermVar);
    console.log("Sresult", searchResult);

    setSearchResult(result);
    if (searchTerm === null) {
      setSearchResult(null);
    }
  }

  return (
    <div>
      <input onKeyUp={handleSearch} type="text" />
      {searchResult &&
        searchResult?.map((item, index) => (
          <article key={index}>
            <h2>{item.className}</h2>
            <p>{item.classDescription}</p>
          </article>
        ))}
    </div>
  );
};

export default Filter;
