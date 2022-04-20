import { makeAutoObservable, makeObservable, action, observable } from "mobx";
function createCounterStore(count) {
	return makeAutoObservable(
		{
			count,
			increase() {
				this.count++;
			},
			decrease() {
				this.count--;
			},
		},
		{},
		{ autoBind: true }
	);
}

class CounterStore {
	count = null
	constructor(count) {
		makeObservable(this, {
			count: observable,
			increase: action,
			decrease: action,
		});
		this.count = count;
	}
	increase = ()=> {
		this.count++;
	}
	decrease = () =>{
		this.count--;
	}
}

export { createCounterStore, CounterStore };
