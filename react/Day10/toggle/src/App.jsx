 
import React, { useState } from "react";

function App() {
  // Initial boolean value
  const [show, setShow] = useState(false);

  // Toggle boolean value
  const toggleDetails = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <h1>Student Information</h1>

      {/* Ternary operator */}
      <button onClick={toggleDetails}>
        {show ? "Hide Details" : "Show Details"}
      </button>

      {/* Display details conditionally */}
      {show ? (
        <div>
          <h2>Student Details</h2>
          <p>Name: Rahul</p>
          <p>Course: React JS</p>
          <p>Department: Computer Science</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
