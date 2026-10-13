
import { useState } from "react";

function FruitList() {
  const [fruit, setFruit] = useState("");
  const [fruits, setFruits] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleChange(event) {
    setFruit(event.target.value);
  }

  function handleAdd(event) {
    event.preventDefault();

    const trimmedFruit = fruit.trim();

    if (!trimmedFruit) return;

    setFruits((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: trimmedFruit,
      },
    ]);

    setFruit("");
  }

  function handleEdit(event) {
    const id = event.currentTarget.dataset.id;
    const selectedFruit = fruits.find((item) => item.id === id);

    if (!selectedFruit) return;

    setFruit(selectedFruit.name);
    setEditId(id);
  }

  function handleUpdate(event) {
    event.preventDefault();

    const trimmedFruit = fruit.trim();

    if (!trimmedFruit || editId === null) return;

    setFruits((prev) =>
      prev.map((item) =>
        item.id === editId
          ? { ...item, name: trimmedFruit }
          : item
      )
    );

    setFruit("");
    setEditId(null);
  }

  function handleCancel() {
    setFruit("");
    setEditId(null);
  }

  return (
    <section className="card">
      <h2>Task 4: Fruit List Update</h2>

      <form onSubmit={editId === null ? handleAdd : handleUpdate}>
        <input
          type="text"
          placeholder="Enter fruit name"
          value={fruit}
          onChange={handleChange}
        />

        <button type="submit">
          {editId === null ? "Add Fruit" : "Save"}
        </button>

        {editId !== null && (
          <button type="button" className="secondary-btn" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </form>

      <ul className="item-list">
        {fruits.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button
              type="button"
              data-id={item.id}
              onClick={handleEdit}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FruitList;
