import { useRootStore } from "../../store";
const ToggleList = () => {
	const { todoStore } = useRootStore();
	const { toggleListComplete } = todoStore;
	const changeListComplete = (e) => {
		const isComplete = e.target.checked;
		if (isComplete) {
			toggleListComplete(true);
		} else {
			toggleListComplete(false);
		}
	};
	return (
		<>
			<input id="toggle-all" onChange={changeListComplete} className="toggle-all" type="checkbox" />
			<label htmlFor="toggle-all">Mark all as complete</label>
		</>
	);
};
export default ToggleList;
