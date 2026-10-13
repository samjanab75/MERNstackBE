
import { useState } from "react";

function StudentNameList() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd(event) {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) return;

    setStudents((prev) => [...prev, trimmedName]);
    setName("");
  }

  return (
    <section className="card">
      <h2>Task 1: Student Name List</h2>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Add Student</button>
      </form>

      <ul>
        {students.map((student, index) => (
          <li key={`${student}-${index}`}>{student}</li>
        ))}
      </ul>
    </section>
  );
}

export default StudentNameList;
