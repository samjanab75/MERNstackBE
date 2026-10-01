import { useState } from "react";

function App() {
  const [selectedTask, setSelectedTask] = useState(1);

  // Task 1
  const studentName = "Arun";
  const age = 22;
  const course = "React";
  const fees = 15000;

  // Task 2
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node"];

  // Task 3
  const student = {
    name: "Priya",
    age: 21,
    course: "MERN Stack",
    city: "Chennai"
  };

  // Task 4
  const students = [
    { id: 1, name: "Arun", course: "React" },
    { id: 2, name: "Priya", course: "Node" },
    { id: 3, name: "Kumar", course: "MongoDB" }
  ];

  return (
    <div>
      <h1>React Rendering Tasks</h1>

      {/* Task Buttons */}
      <button onClick={() => setSelectedTask(1)}>
        Task 1
      </button>

      <button onClick={() => setSelectedTask(2)}>
        Task 2
      </button>

      <button onClick={() => setSelectedTask(3)}>
        Task 3
      </button>

      <button onClick={() => setSelectedTask(4)}>
        Task 4
      </button>

      <hr />

      {/* TASK 1 OUTPUT */}
      {selectedTask === 1 && (
        <div>
          <h2>{studentName}</h2>
          <p>Age: {age}</p>
          <p>Course: {course}</p>
          <p>Fees: {fees}</p>
        </div>
      )}

      {/* TASK 2 OUTPUT */}
      {selectedTask === 2 && (
        <div>
          <h2>Skills</h2>

          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {/* TASK 3 OUTPUT */}
      {selectedTask === 3 && (
        <div>
          <h2>Student Details</h2>

          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          <p>City: {student.city}</p>
        </div>
      )}

      {/* TASK 4 OUTPUT */}
      {selectedTask === 4 && (
        <div>
          <h2>Students</h2>

          <ul>
            {students.map((student) => (
              <li key={student.id}>
                {student.name} - {student.course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;