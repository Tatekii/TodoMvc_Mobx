import Counter from "./components/Counter/Counter";
import TodoApp from "./components/Todo/TodoApp";
// import {createCounterStore,CounterStore} from "./store/counter.store";

// const counterStore = createCounterStore(0);
// console.log(CounterStore);
// const counterStore = new CounterStore(0)
import RootStoreProvider from "./store/index";

function App() {
	return (
		<>
			<RootStoreProvider>
				<Counter></Counter>
				<div style={{background:'gray',height:'10px'}}></div>
				<TodoApp></TodoApp>
			</RootStoreProvider>
			{/* <Counter counterStore={counterStore}></Counter> */}
		</>
	);
}

export default App;
