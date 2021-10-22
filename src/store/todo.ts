import {makeAutoObservable} from "mobx";

class Todo {
    todos = []

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