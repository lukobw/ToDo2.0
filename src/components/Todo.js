import React from 'react';

const Todo = ({todo, remove}) => {
	return(
		<li>
			{todo.text}
			<button type="button" onClick={(e) => remove(todo.id)}> x </button>
		</li>
		);
}
export default Todo;