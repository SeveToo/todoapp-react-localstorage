import react from "react";
// Import components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  // console.log(todos);
  // const [todos, setTodos] = useState([]);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
