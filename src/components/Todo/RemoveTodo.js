import {useRootStore} from '../../store/index'


const RemoveTodo = ({ id }) => {
  const {todoStore} = useRootStore()
  const {deleteTodo} = todoStore
	// 删除todo
	const handleRemove = () => {
    console.log('delete id'+id);
    deleteTodo(id)
  };
	return <button onClick={handleRemove} className="destroy"></button>;
};

export default RemoveTodo;
