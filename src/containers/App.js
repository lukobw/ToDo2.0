import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                id: 1,
                    text: 'clean room'
                },
                {
                id: 2,
                    text: 'wash the dishes'
                },
                {
                id: 3,
                    text: 'feed my cat'
                }
            ]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="ToDo Aplication" tasksNumber={this.state.data.length}/>
                <TodoList data={this.state.data} remove={this.removeTodo}/>
            </div>
        );
    }
}

export default App;