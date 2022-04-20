import { observer } from "mobx-react-lite";
import RemoveTodo from "./RemoveTodo";
import ToggleComplete from "./ToggleComplete";
import ToggleEditing from "./ToggleEditing";
import TodoEdit from "./TodoEdit";
import classname from 'classnames'

const Todo = ({todo}) => {
  const {id,isComplete,onEditing,changeComplete} = todo

	const liClassName = classname({
		completed:isComplete,
		editing:onEditing
	})

	return (
		<li className={liClassName}>
			<div className="view">
        <ToggleComplete isComplete={isComplete} changeComplete={changeComplete}/>
				<ToggleEditing todo={todo}></ToggleEditing>
        <RemoveTodo id={id}/>
			</div>
			<TodoEdit todo={todo}/>
		</li>
	);
};
export default observer(Todo)