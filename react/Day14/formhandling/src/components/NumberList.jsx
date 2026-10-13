
import { useState } from "react";

function NumberList() {
  const [number, setNumber] = useState("");
  const [numbers, setNumbers] = useState([]);

  function handleChange(event) {
    setNumber(event.target.value);
  }

  function handleAdd(event) {
    event.preventDefault();

    if (number.trim() === "") return;

    const value = Number(number);

    if (!Number.isFinite(value)) return;

    setNumbers((prev) => [...prev, value]);
    setNumber("");
  }

  return (
    <section className="card">
      <h2>Task 3: Number List</h2>

      <form onSubmit={handleAdd}>
        <input
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={handleChange}
          step="any"
        />
        <button type="submit">Add Number</button>
      </form>

      <ul>
        {numbers.map((value, index) => (
          <li key={`${value}-${index}`}>
            {value} — {value % 2 === 0 ? "Even" : "Odd"}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NumberList;
