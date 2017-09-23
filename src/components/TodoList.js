import React from 'react';
import Todo from './Todo';

const TodoList = ({data, remove}) => {
    const taskList = data.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove} />)
    });

    return (
        <div>
            {taskList} 
        </div>
    );
}

export default TodoList;
