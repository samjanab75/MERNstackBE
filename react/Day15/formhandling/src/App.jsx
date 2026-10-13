
import { useState } from "react";

const tasks = {
  Employee: {
    fields: [
      { name: "name", label: "Employee Name", type: "text" },
      { name: "department", label: "Department", type: "text" },
      { name: "salary", label: "Salary", type: "number" },
    ],
    columns: ["name", "department", "salary"],
  },
  Product: {
    fields: [
      { name: "name", label: "Product Name", type: "text" },
      { name: "price", label: "Price", type: "number" },
      { name: "quantity", label: "Quantity", type: "number" },
    ],
    columns: ["name", "price", "quantity"],
  },
  Course: {
    fields: [
      { name: "name", label: "Course Name", type: "text" },
      { name: "trainer", label: "Trainer", type: "text" },
      { name: "duration", label: "Duration", type: "text" },
    ],
    columns: ["name", "trainer", "duration"],
  },
  Expense: {
    fields: [
      { name: "title", label: "Expense Title", type: "text" },
      { name: "amount", label: "Amount", type: "number" },
      { name: "category", label: "Category", type: "text" },
    ],
    columns: ["title", "amount", "category"],
  },
  Student: {
    fields: [
      { name: "name", label: "Student Name", type: "text" },
      { name: "tamil", label: "Tamil Marks", type: "number" },
      { name: "english", label: "English Marks", type: "number" },
      { name: "maths", label: "Maths Marks", type: "number" },
    ],
    columns: ["name", "tamil", "english", "maths", "total"],
  },
};

const emptyForm = (fields) =>
  Object.fromEntries(fields.map((field) => [field.name, ""]));

function App() {
  const [active, setActive] = useState("Employee");
  const [records, setRecords] = useState({
    Employee: [],
    Product: [],
    Course: [],
    Expense: [],
    Student: [],
  });

  const [form, setForm] = useState(emptyForm(tasks.Employee.fields));
  const [editId, setEditId] = useState(null);

  const config = tasks[active];
  const rows = records[active];

  function changeTask(task) {
    setActive(task);
    setForm(emptyForm(tasks[task].fields));
    setEditId(null);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      Object.values(form).some(
        (value) => value.trim() === ""
      )
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const numericFields = config.fields.filter(
      (field) => field.type === "number"
    );

    if (
      numericFields.some(
        (field) => !Number.isFinite(Number(form[field.name])) ||
          Number(form[field.name]) < 0
      )
    ) {
      alert("Enter valid non-negative numbers.");
      return;
    }

    if (
      active === "Student" &&
      ["tamil", "english", "maths"].some(
        (subject) => Number(form[subject]) > 100
      )
    ) {
      alert("Marks must be between 0 and 100.");
      return;
    }

    const record = {
      ...form,
      id: editId ?? Date.now(),
    };

    setRecords((previous) => ({
      ...previous,
      [active]:
        editId === null
          ? [...previous[active], record]
          : previous[active].map((item) =>
              item.id === editId ? record : item
            ),
    }));

    setForm(emptyForm(config.fields));
    setEditId(null);
  }

  function handleEdit(item) {
    setForm(
      Object.fromEntries(
        config.fields.map((field) => [
          field.name,
          String(item[field.name]),
        ])
      )
    );

    setEditId(item.id);
  }

  function handleDelete(id) {
    setRecords((previous) => ({
      ...previous,
      [active]: previous[active].filter(
        (item) => item.id !== id
      ),
    }));

    if (editId === id) {
      setForm(emptyForm(config.fields));
      setEditId(null);
    }
  }

  function displayValue(item, column) {
    if (column === "total") {
      return ["tamil", "english", "maths"].reduce(
        (sum, subject) => sum + Number(item[subject]),
        0
      );
    }

    return item[column];
  }

  return (
    <div className="min-h-screen bg-[#F7F3FF] p-4 sm:p-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-8 rounded-2xl bg-[#DCD0F5] p-6 text-[#49376F] shadow-md">
          <p className="text-sm font-semibold tracking-widest">
            REACT + TAILWIND CSS
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Form Management Dashboard
          </h1>

          <p className="mt-2 text-[#5D4A82]">
            Manage employees, products, courses, expenses
            and student marks.
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-6 flex flex-wrap gap-3">
          {Object.keys(tasks).map((task) => (
            <button
              key={task}
              onClick={() => changeTask(task)}
              className={`rounded-xl px-5 py-3 font-semibold transition duration-200 ${
                active === task
                  ? "bg-[#8B7BB8] text-white shadow-md"
                  : "bg-white text-[#74639F] hover:bg-[#EEE7FF]"
              }`}
            >
              {task}
            </button>
          ))}
        </nav>

        {/* Form and Table */}
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">

          {/* Form */}
          <section className="h-fit rounded-2xl border border-[#E8DFFF] bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-[#49376F]">
              {editId !== null ? "Edit" : "Add"} {active}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {config.fields.map((field) => (
                <div key={field.name}>
                  <label className="mb-2 block text-sm font-semibold text-[#5D4A82]">
                    {field.label}
                  </label>

                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    required
                    min={field.type === "number" ? 0 : undefined}
                    max={
                      active === "Student" &&
                      field.type === "number"
                        ? 100
                        : undefined
                    }
                    step={field.type === "number" ? "any" : undefined}
                    className="w-full rounded-xl border border-[#DCD0F5] bg-[#FCFAFF] px-4 py-3 text-[#49376F] outline-none transition placeholder:text-[#A99BC8] focus:border-[#8B7BB8] focus:ring-2 focus:ring-[#EEE7FF]"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#8B7BB8] px-4 py-3 font-bold text-white transition hover:bg-[#74639F] active:scale-[0.98]"
              >
                {editId !== null ? "Update" : "Add"} {active}
              </button>

              {editId !== null && (
                <button
                  type="button"
                  onClick={() => {
                    setForm(emptyForm(config.fields));
                    setEditId(null);
                  }}
                  className="w-full rounded-xl border border-[#DCD0F5] px-4 py-3 font-semibold text-[#74639F] hover:bg-[#F7F3FF]"
                >
                  Cancel Edit
                </button>
              )}
            </form>
          </section>

          {/* Table */}
          <section className="min-w-0 rounded-2xl border border-[#E8DFFF] bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-[#49376F]">
                {active} Records
              </h2>

              <span className="rounded-full bg-[#EEE7FF] px-4 py-2 text-sm font-bold text-[#74639F]">
                {rows.length} Records
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-left text-sm">
                <thead className="bg-[#EEE7FF] text-[#49376F]">
                  <tr>
                    {config.columns.map((column) => (
                      <th
                        key={column}
                        className="px-4 py-4 font-bold"
                      >
                        {column === "total"
                          ? "Total Marks"
                          : column.charAt(0).toUpperCase() +
                            column.slice(1)}
                      </th>
                    ))}

                    <th className="px-4 py-4 font-bold">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#F0E9FF]">
                  {rows.map((item) => (
                    <tr
                      key={item.id}
                      className="transition hover:bg-[#F5F0FF]"
                    >
                      {config.columns.map((column) => (
                        <td
                          key={column}
                          className="px-4 py-4 text-[#5D4A82]"
                        >
                          {displayValue(item, column)}
                        </td>
                      ))}

                      <td className="whitespace-nowrap px-4 py-4">
                        <button
                          onClick={() => handleEdit(item)}
                          className="mr-3 font-bold text-[#74639F] hover:underline"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(item.id)}
                          className="font-bold text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

                  {rows.length === 0 && (
                    <tr>
                      <td
                        colSpan={config.columns.length + 1}
                        className="px-4 py-12 text-center text-[#A99BC8]"
                      >
                        <p className="text-lg font-semibold">
                          No records yet
                        </p>
                        <p className="mt-1">
                          Add your first {active.toLowerCase()} above.
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default App;
