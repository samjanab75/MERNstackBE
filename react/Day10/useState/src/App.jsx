 
import React, { useState } from "react";

function App() {
  // Initial array state
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  // Add React to the array
  const addReact = () => {
    if (!skills.includes("React")) {
      setSkills([...skills, "React"]);
    }
  };

  // Update JavaScript to Advanced JavaScript
  const updateJavaScript = () => {
    setSkills(
      skills.map((skill) =>
        skill === "JavaScript"
          ? "Advanced JavaScript"
          : skill
      )
    );
  };

  return (
    <div>
      <h1>My Skills</h1>

      {/* Display skills using map() */}
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button onClick={addReact}>
        Add React
      </button>

      <button onClick={updateJavaScript}>
        Update JavaScript
      </button>

      <h2>Updated Array</h2>
      <p>{JSON.stringify(skills)}</p>
    </div>
  );
}

export default App;
