import { useEffect, useState } from "react";

const Todolist = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodo = (e) => {
    setTodo(e.target.value);
    console.log(e.target.value);
  };

  const handleAdd = () => {
    setTodos((prev) => {
      const newTodos = [...prev, todo];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      console.log(newTodos);
      return newTodos;
    });
    setTodo("");
  };

  const handleDelete = (idx) => {
    setTodos((prev) => {
      const newTodos = prev.filter((prev, i) => i !== idx);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  return (
    <>
      <h2>Todolist</h2>
      <input
        value={todo}
        placeholder="할 일을 입력해주세요."
        onChange={handleTodo}
      ></input>
      <button onClick={handleAdd}>추가</button>
      <div>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <div key={index}>
              {todo}
              <button onClick={() => handleDelete(index)}>삭제</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Todolist;
