import {  useState } from "react";
import { useRootStore } from "../../store/index";

const Header = () => {
	const { todoStore } = useRootStore();
	const { addTodo } = todoStore;
	const [text, setText] = useState("");
	const handleEnter = (e) => {
		if (e.key !== "Enter") return;
		// 回车添加todo
		if(!text) return
		addTodo(text);
		setText('')
	};
	return (
		<header className="header">
			<h1>todos</h1>
			<input
				className="new-todo"
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyUp={handleEnter}
				placeholder="What needs to be done?"
				autoFocus
			/>
		</header>
	);
};
export default Header;
