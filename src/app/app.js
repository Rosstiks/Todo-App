import React from "react";
import Header from "../header";
import TaskList from "../task-list";
import Footer from "../footer";

export default class App extends React.Component {
    currentId = 1;

    state = {
        todos: [
            {id: 0, text: 'Create new Task', done: false, createDate: new Date(2021, 10, 1, 2, 3)},
        ],
        filter: 'All',
    };

    removeTodo = (id) => {
        this.setState(({ todos }) => {
            const idx = todos.findIndex(el => el.id === id);
            const newTodos = [...todos];
            newTodos.splice(idx, 1)
            return {
                todos: newTodos,
            }
        })
    }
    addTodo = (text) => {
        const newTodo = {
            id: this.currentId++,
            text,
            done: false,
            createDate: Date.now(),
        };
        this.setState({
            todos: [...this.state.todos, newTodo],
        });
    }
    doneTodo = (id) => {
        this.setState(({ todos }) => {
            const idx = todos.findIndex(el => el.id === id);
            const newTodo = { ...todos[idx], done: !todos[idx].done};
            const newTodos = [...todos];
            newTodos.splice(idx, 1, newTodo);
            return {
                todos: newTodos,
            }
        });
    }
    clearDone = () => {
        const newTodos = this.state.todos.filter(el => !el.done);
        this.setState({
            todos: newTodos,
        })
    }
    changeFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        const { todos, filter } = this.state;
        const countActive = todos.filter(el => !el.done).length;
        let renderData;
        switch (filter) {
            case "Active":
                renderData = todos.filter(el => !el.done);
                break;
            case "Completed":
                renderData = todos.filter(el => el.done);;
                break;
            default:
                renderData = todos;
        }

        return (
            <section className='todoapp'>
                <Header addTodo = { text => this.addTodo(text) }/>
                <section className = 'main' >
                    <TaskList
                        data = { renderData }
                        removeTodo = { (id) => this.removeTodo(id) }
                        doneTodo = { this.doneTodo }
                    />
                    <Footer
                        clearDone = { this.clearDone }
                        countActive = { countActive }
                        changeFilter = { this.changeFilter }
                        filter = { filter }
                    />
                </section>
            </section>
        )
    };
};