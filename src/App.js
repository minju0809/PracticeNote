import { useState } from "react";
import "./App.css";
import Todolist from "./pages/Todolist";
import Array from "./pages/Array";

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setPage(0)}>Todolist</button>
      <button onClick={() => setPage(1)}>Array</button>
      <div className="contents">
        {page === 0 && <Todolist setPage={setPage} />}
        {page === 1 && <Array setPage={setPage} />}
      </div>
    </div>
  );
}

export default App;
