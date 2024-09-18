import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Todo.jsx";
import Todo from "./Todo.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-dark">
      <Todo />
    </div>
  );
}

export default App;
