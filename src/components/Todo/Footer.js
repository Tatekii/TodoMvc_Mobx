import { observer } from "mobx-react-lite";
import { useRootStore } from "../../store";

const Footer = () => {
	const { todoStore } = useRootStore();
	const { activeTodo,changeFilterCondition,filterCondition,cleanCompleted } = todoStore;

	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{activeTodo.length}</strong> item left
			</span>
			<ul className="filters">
				{["All", "Active", "Completed"].map((item,i) => (
					<li key={i}>
						<button className={filterCondition === item ? 'selected' : ''} onClick={()=>changeFilterCondition(item)}>{item}</button>
					</li>
				))}
			</ul>
			<button className="clear-completed" onClick={cleanCompleted}>Clear completed</button>
		</footer>
	);
};

export default observer(Footer);
