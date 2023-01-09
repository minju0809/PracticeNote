import { useState } from "react";
import "./App.css";
import Todolist from "./pages/Todolist";
import Array from "./pages/Array";
import FindGym from "./pages/FindGym";
import MovieAPI from "./pages/MovieAPI";

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setPage(0)}>Todolist</button>
      <button onClick={() => setPage(1)}>Array</button>
      <button onClick={() => setPage(2)}>FindGym</button>
      <button onClick={() => setPage(3)}>MovieAPI</button>
      <div className="contents">
        {page === 0 && <Todolist setPage={setPage} />}
        {page === 1 && <Array />}
        {page === 2 && <FindGym />}
        {page === 3 && <MovieAPI />}
      </div>
    </div>
  );
}

export default App;
