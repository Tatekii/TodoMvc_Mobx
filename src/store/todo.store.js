import { action, computed, makeObservable, observable } from "mobx";
import { nanoid } from "nanoid";

class Todo {
	constructor(todo) {
		this.id = todo.id;
		this.title = todo.title;
		this.isComplete = todo.isComplete || false;
		this.onEditing = false;
		makeObservable(this, {
			title: observable,
			isComplete: observable,
			onEditing: observable,
			changeComplete: action,
			changeEditing: action,
		});
	}
	changeComplete = (flag) => {
		this.isComplete = flag;
	};
	changeEditing = () => {
		this.onEditing = !this.onEditing;
	};
	changeTitle = (title) => {
		this.title = title;
	}
}

export default class TodoStore {
	constructor() {
		this.todos = [];
		this.filterCondition = "All";
		makeObservable(this, {
			todos: observable,
			addTodo: action,
			deleteTodo: action,
			completeTodo: computed,
			activeTodo: computed,
			filterCondition: observable,
			changeFilterCondition: action,
			filterTodos: computed,
			cleanCompleted:action,
			toggleListComplete:action
		});
	}
	get filterTodos() {
		switch (this.filterCondition) {
			case "Active":
				return this.activeTodo;
			case "Completed":
				return this.completeTodo;
			case "All":
				return this.todos
			default:
				return this.todos				
		}
	}
	get completeTodo() {
		return this.todos.filter((item) => item.isComplete);
	}
	get activeTodo() {
		return this.todos.filter((item) => !item.isComplete);
	}
	addTodo = (title) => {
		this.todos.push(
			new Todo({
				id: nanoid(),
				title,
			})
		);
	};
	deleteTodo = (id) => {
		this.todos = this.todos.filter((t) => t.id !== id);
	};
	changeFilterCondition = (filter) => {
		this.filterCondition = filter
	}
	cleanCompleted = () => {
		this.todos = this.todos.filter(item=>!item.isComplete)
	}
	toggleListComplete = (flag) => {
		this.filterTodos.forEach(todo=>todo.changeComplete(flag))
	}
}
