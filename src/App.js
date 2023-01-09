import { useState } from "react";
import "./App.css";
import Todolist from "./pages/Todolist";
import Array from "./pages/Array";
import FindGym from "./pages/FindGym";

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setPage(0)}>Todolist</button>
      <button onClick={() => setPage(1)}>Array</button>
      <button onClick={() => setPage(2)}>FindGym</button>
      <div className="contents">
        {page === 0 && <Todolist setPage={setPage} />}
        {page === 1 && <Array />}
        {page === 2 && <FindGym />}
      </div>
    </div>
  );
}

export default App;
