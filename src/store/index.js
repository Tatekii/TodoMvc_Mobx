import {CounterStore} from "./counter.store";
import { useContext, createContext } from "react";
import TodoStore from "./todo.store";


class RootStore {
	constructor() {
		this.counterStore = new CounterStore(0);
		this.todoStore = new TodoStore()
	}
}

const rootStore = new RootStore();
const RootStoreContext = createContext();

const RootStoreProvider = ({ children }) => {
	return <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>;
};

export const useRootStore = () => useContext(RootStoreContext);
export default RootStoreProvider;
