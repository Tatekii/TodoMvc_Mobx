import { useRef, useState, useEffect } from "react";

const TodoEdit = ({ todo }) => {
	const { title, onEditing,changeTitle,changeEditing } = todo;
	const [text, setText] = useState(title);
	const inputRef = useRef(null);

	useEffect(() => {
		// 自动focus
		if (onEditing) {
			inputRef.current.focus();
		}
	}, [onEditing]);

  const handleKeyUp = (e) => {
    if(e.key!=='Enter') return 
    if(!text) return 
    // 更新title
    changeTitle(text)
    changeEditing()
  } 

	return <input ref={inputRef} onKeyUp={handleKeyUp} className="edit" value={text} onChange={(e) => setText(e.target.value)}></input>;
};
export default TodoEdit;
