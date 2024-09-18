import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setItems([
        ...items,
        { id: Date.now(), text: inputValue.trim(), completed: false },
      ]);
      setInputValue("");
    }
  };

  const toggleItem = (id) => {
    setItems(
      items.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container-fluid py-4" style={{ maxWidth: "600px" }}>
        <h1
          className="text-center mb-4"
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Todo List
        </h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light text-dark"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Add a new item in the list"
              style={{
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                border: "none",
              }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              Add task
            </button>
          </div>
        </form>
        <div
          className={`p-3 rounded ${
            items.length === 0 ? "" : "bg-secondary bg-opacity-25"
          }`}
        >
          {items.map((todo) => (
            <div
              key={todo.id}
              className="bg-dark d-flex justify-content-between align-items-center p-2 mb-2 rounded"
            >
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleItem(todo.id)}
                  className="me-3 form-check-input"
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteItem(todo.id)}
                className="btn btn-danger btn-sm"
                style={{ borderRadius: "5px" }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
