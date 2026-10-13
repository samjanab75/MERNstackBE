
import { useState } from "react";

function EmployeeList() {
  const [name, setName] = useState("");
  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd(event) {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) return;

    setEmployees((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: trimmedName,
      },
    ]);

    setName("");
  }

  function handleEdit(event) {
    const id = event.currentTarget.dataset.id;
    const employee = employees.find((item) => item.id === id);

    if (!employee) return;

    setName(employee.name);
    setEditId(id);
  }

  function handleUpdate(event) {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName || editId === null) return;

    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id === editId
          ? { ...employee, name: trimmedName }
          : employee
      )
    );

    setName("");
    setEditId(null);
  }

  function handleDelete(event) {
    const id = event.currentTarget.dataset.id;

    setEmployees((prev) =>
      prev.filter((employee) => employee.id !== id)
    );

    if (editId === id) {
      setName("");
      setEditId(null);
    }
  }

  function handleCancel() {
    setName("");
    setEditId(null);
  }

  return (
    <section className="card">
      <h2>Task 5: Employee Management</h2>

      <form onSubmit={editId === null ? handleAdd : handleUpdate}>
        <input
          type="text"
          placeholder="Enter employee name"
          value={name}
          onChange={handleChange}
        />

        <button type="submit">
          {editId === null ? "Add Employee" : "Save Changes"}
        </button>

        {editId !== null && (
          <button
            type="button"
            className="secondary-btn"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </form>

      {employees.length === 0 ? (
        <p className="empty">No employees added yet.</p>
      ) : (
        <ul className="item-list">
          {employees.map((employee) => (
            <li key={employee.id}>
              <span>{employee.name}</span>

              <div className="actions">
                <button
                  type="button"
                  data-id={employee.id}
                  onClick={handleEdit}
                >
                  Edit
                </button>

                <button
                  type="button"
                  className="delete-btn"
                  data-id={employee.id}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default EmployeeList;
