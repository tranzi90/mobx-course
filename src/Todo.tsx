import {observer} from "mobx-react-lite";
import toDo from "./store/todo";

const Todo = observer(() => {
    return (
        <div>
            {toDo.todos.map(todo =>
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={() => toDo.completeTodo(todo.id)}/>
                    {todo.title}
                    <button onClick={() => toDo.removeTodo(todo.id)}>X</button>
                </div>
            )}
        </div>
    );
});

export default Todo;