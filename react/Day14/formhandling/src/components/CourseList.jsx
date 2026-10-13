
import { useState } from "react";

function CourseList() {
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);

  function handleChange(event) {
    setCourse(event.target.value);
  }

  function handleAdd(event) {
    event.preventDefault();

    const trimmedCourse = course.trim();

    if (!trimmedCourse) return;

    setCourses((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: trimmedCourse,
      },
    ]);

    setCourse("");
  }

  function handleDelete(event) {
    const id = event.currentTarget.dataset.id;

    setCourses((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  return (
    <section className="card">
      <h2>Task 2: Course List</h2>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter course name"
          value={course}
          onChange={handleChange}
        />
        <button type="submit">Add Course</button>
      </form>

      <ul className="item-list">
        {courses.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button
              type="button"
              className="delete-btn"
              data-id={item.id}
              onClick={handleDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CourseList;
