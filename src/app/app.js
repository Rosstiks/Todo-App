import React from "react";
import Header from "../header";
import TaskList from "../task-list";
import Footer from "../footer";

export default class App extends React.Component {

    state = {
        todos: [
            {text: 'test Todo1', createDate: new Date(2021, 10, 1, 2, 3), id: 1},
            {text: 'test Todo2', createDate: new Date(2021, 10, 5, 2, 3), id: 2},
            {text: 'test Todo4', createDate: new Date(2021, 10, 10, 9, 1), id: 4},
            {text: 'test Todo3', createDate: new Date(2021, 11, 10, 9, 1), id: 3},
        ],
    };

    removeTodo = (id) => {
        this.setState(({ todos }) => {
            const deleteIndex = todos.findIndex(el => el.id === id);
            const newTodos = [...todos];
            newTodos.splice(deleteIndex, 1)
            return {
                todos: newTodos,
            }
        })
    }

    render() {
        const { todos } = this.state;
        return (
            <section className='todoapp'>
                <Header />
                <section className='main'>
                    <TaskList data={ todos } removeTodo={(id) => this.removeTodo(id)} />
                    <Footer />
                </section>
            </section>
        )
    };
};