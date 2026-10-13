 
import { useState } from "react";
import "./App.css";

function App() {
  // TASK 1: Toggle True / False
  const [isOn, setIsOn] = useState(false);

  // TASK 2: Like Button
  const [isLiked, setIsLiked] = useState(false);

  // TASK 3: Update an Object
  const [user, setUser] = useState({
    name: "Rahul",
    age: 22,
    city: "Chennai",
  });

  // TASK 4: Update an Object Inside an Array
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Phone", price: 20000, inStock: false },
    { id: 3, name: "Tablet", price: 15000, inStock: true },
  ]);

  // TASK 5: Student Management
  const [students, setStudents] = useState([
    { id: 1, name: "Ravi", marks: 75, isPassed: true },
    { id: 2, name: "Priya", marks: 35, isPassed: false },
    { id: 3, name: "Kumar", marks: 90, isPassed: true },
  ]);

  // Task 4: Toggle stock of one product
  const toggleStock = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, inStock: !product.inStock }
          : product
      )
    );
  };

  // Task 5: Increase marks by 5
  const increaseMarks = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, marks: student.marks + 5 }
          : student
      )
    );
  };

  // Task 5: Toggle pass/fail result
  const toggleResult = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, isPassed: !student.isPassed }
          : student
      )
    );
  };

  // Task 5: Delete one student
  const deleteStudent = (id) => {
    setStudents((prev) =>
      prev.filter((student) => student.id !== id)
    );
  };

  return (
    <div className="app">
      <header className="header">
        <h1>React useState Assignment</h1>
        <p>Practice Boolean State, Objects and Arrays</p>
      </header>

      <main className="container">

        {/* TASK 1 */}
        <section className="card">
          <span className="task-number">TASK 01</span>
          <h2>Toggle True / False</h2>

          <div className="status-row">
            <p>Status:</p>
            <span className={isOn ? "badge on" : "badge off"}>
              {isOn ? "ON" : "OFF"}
            </span>
          </div>

          <button
            className={isOn ? "btn danger" : "btn primary"}
            onClick={() => setIsOn((prev) => !prev)}
          >
            {isOn ? "Turn OFF" : "Turn ON"}
          </button>
        </section>

        {/* TASK 2 */}
        <section className="card">
          <span className="task-number">TASK 02</span>
          <h2>Like Button</h2>

          <div className="post">
            <h3>My Post</h3>
            <p>Click the Like button!</p>

            <button
              className={isLiked ? "btn liked" : "btn primary"}
              onClick={() => setIsLiked((prev) => !prev)}
            >
              {isLiked ? "Liked ❤️" : "Like"}
            </button>

            {isLiked && (
              <p className="success-message">
                You liked this post!
              </p>
            )}
          </div>
        </section>

        {/* TASK 3 */}
        <section className="card">
          <span className="task-number">TASK 03</span>
          <h2>Update an Object</h2>

          <div className="details">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>City:</strong> {user.city}</p>
          </div>

          <div className="button-group">
            <button
              className="btn primary"
              onClick={() =>
                setUser((prev) => ({
                  ...prev,
                  name: "Arjun",
                }))
              }
            >
              Change Name
            </button>

            <button
              className="btn primary"
              onClick={() =>
                setUser((prev) => ({
                  ...prev,
                  age: prev.age + 1,
                }))
              }
            >
              Increase Age
            </button>

            <button
              className="btn primary"
              onClick={() =>
                setUser((prev) => ({
                  ...prev,
                  city: "Bangalore",
                }))
              }
            >
              Change City
            </button>
          </div>
        </section>

        {/* TASK 4 */}
        <section className="card">
          <span className="task-number">TASK 04</span>
          <h2>Product Stock Management</h2>

          <div className="grid">
            {products.map((product) => (
              <article className="item-card" key={product.id}>
                <div className="product-icon">
                  {product.name === "Laptop"
                    ? "💻"
                    : product.name === "Phone"
                    ? "📱"
                    : "📟"}
                </div>

                <h3>{product.name}</h3>

                <p className="price">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <span
                  className={
                    product.inStock
                      ? "badge on"
                      : "badge off"
                  }
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>

                <button
                  className="btn primary full"
                  onClick={() => toggleStock(product.id)}
                >
                  Toggle Stock
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* TASK 5 */}
        <section className="card">
          <span className="task-number">TASK 05</span>
          <h2>Student Management App</h2>

          <p className="description">
            Update marks, change results, or remove students.
          </p>

          {students.length === 0 ? (
            <p className="empty-message">
              No students available.
            </p>
          ) : (
            <div className="grid">
              {students.map((student) => (
                <article className="item-card" key={student.id}>
                  <div className="student-avatar">
                    {student.name.charAt(0)}
                  </div>

                  <h3>{student.name}</h3>

                  <p className="marks">
                    Marks: <strong>{student.marks}</strong>
                  </p>

                  <span
                    className={
                      student.isPassed
                        ? "badge on"
                        : "badge off"
                    }
                  >
                    {student.isPassed ? "Passed" : "Failed"}
                  </span>

                  <div className="student-actions">
                    <button
                      className="btn primary full"
                      onClick={() => increaseMarks(student.id)}
                    >
                      Increase Marks (+5)
                    </button>

                    <button
                      className="btn secondary full"
                      onClick={() => toggleResult(student.id)}
                    >
                      Toggle Result
                    </button>

                    <button
                      className="btn danger full"
                      onClick={() => deleteStudent(student.id)}
                    >
                      Delete Student
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

      </main>

      <footer className="footer">
        <p>React Practice Project · useState Assignment</p>
      </footer>
    </div>
  );
}

export default App;
