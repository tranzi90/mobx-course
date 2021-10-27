import {makeAutoObservable} from "mobx";

class Todo {
    todos = [
        {id: 1, title: 'Master Mobx', completed: false},
        {id: 2, title: 'Practice React', completed: false},
        {id: 3, title: 'Use TypeScript instead of JS', completed: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: any) {
        this.todos.push(todo)
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id: number) {
        const currentTodo = this.todos.filter(todo => todo.id === id)[0]
        currentTodo.completed = !currentTodo.completed
    }
}

export default new Todo()