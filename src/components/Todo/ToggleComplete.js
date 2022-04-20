const ToggleComplete = ({ isComplete,changeComplete }) => {
	//  切换完成状态
	const handleToggle = (e) => {
		const isChecked = e.target.checked;
		changeComplete(isChecked);
	};
	return <input className="toggle" type="checkbox" onChange={handleToggle} checked={isComplete} />;
};

export default ToggleComplete;
