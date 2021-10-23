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

    addTodo() {

    }

    removeTodo() {

    }

    completeTodo() {

    }
}

export default new Todo()