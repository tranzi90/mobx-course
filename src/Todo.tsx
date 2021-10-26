import {observer} from "mobx-react-lite";
import todo from "./store/todo";

const Todo = observer(() => {
    return (
        <div>
            {todo.todos.map(todo =>
                <div>
                    <input type="checkbox"/>
                    {todo.title}
                    <button>X</button>
                </div>
            )}
        </div>
    );
});

export default Todo;