
import React, { useState } from "react";

function App() {
  // Initial course array
  const [courses, setCourses] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  // Add React using spread operator
  const addReact = () => {
    if (!courses.includes("React")) {
      setCourses([...courses, "React"]);
    }
  };

  // Update CSS to Advanced CSS
  const updateCSS = () => {
    setCourses(
      courses.map((course) =>
        course === "CSS" ? "Advanced CSS" : course
      )
    );
  };

  return (
    <div>
      <h1>Course List</h1>

      {/* Display courses using map() */}
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>

      <button onClick={addReact}>Add React</button>

      <button onClick={updateCSS}>Update CSS</button>

      <h2>Updated Array</h2>
      <p>{JSON.stringify(courses)}</p>
    </div>
  );
}

export default App;
