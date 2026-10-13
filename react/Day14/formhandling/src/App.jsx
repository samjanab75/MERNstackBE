
import StudentNameList from "./components/StudentNameList";
import CourseList from "./components/CourseList";
import NumberList from "./components/NumberList";
import FruitList from "./components/FruitList";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>React Form Handling</h1>
        <p>Five Practical Exercises with useState</p>
      </header>

      <main className="container">
        <StudentNameList />
        <CourseList />
        <NumberList />
        <FruitList />
        <EmployeeList />
      </main>

      <footer className="footer">
        React Practice Project
      </footer>
    </div>
  );
}

export default App;
