import { useState } from "react";

export default function useSelect(options) {
  const [selected, setSelected] = useState("Vælg noget");

  function selectHandler(event) {
    setSelected(event.target.value);
  }

  const select = (
    <>
      <select name="hookSelect" onChange={selectHandler}>
        <option defaultValue>Vælg én</option>
        {options.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </>
  );

  return { selected, select };
}
