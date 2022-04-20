import "./index.css";
import Todo from "./Todo";
import Header from "./Header";
import Footer from "./Footer";
import { useRootStore } from "../../store";
import { observer } from "mobx-react-lite";
import ToggleList from "./ToggleList";

const TodoApp = () => {
	const { todoStore } = useRootStore();
	const { filterTodos: todos } = todoStore;
	return (
		<>
			<section className="todoapp">
				<Header />
				<section className="main">
					<ToggleList />
					<ul className="todo-list">
						{todos.length > 0 && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
					</ul>
				</section>
				<Footer />
			</section>
		</>
	);
};

export default observer(TodoApp);
