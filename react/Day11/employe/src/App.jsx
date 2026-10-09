
import React, { useState } from "react";

function EmployeeSalary() {
  const [name, setName] = useState("Arun");
  const [salary, setSalary] = useState(25000);

  const increaseSalary = () => {
    setSalary((prevSalary) => prevSalary + 5000);
  };

  return (
    <div>
      <h1>Employee Salary Details</h1>

      <h2>Employee Name: {name}</h2>
      <h2>Salary: ₹{salary}</h2>

      <button onClick={increaseSalary}>
        Increase Salary
      </button>
    </div>
  );
}

export default EmployeeSalary;
