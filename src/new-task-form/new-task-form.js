import React from "react";

export default class NewTaskForm extends React.Component {

    state = {
        newTodoLabel: '',
    }

    onLabelChange = (e) => {
        this.setState({
            newTodoLabel: e.target.value,
        })
    }

    onSubmitNewTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodoLabel)
        this.setState({
            newTodoLabel: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitNewTodo}>
                <input
                    className='new-todo'
                    placeholder="What needs to be done?"
                    autoFocus
                    onChange={this.onLabelChange}
                    value={this.state.newTodoLabel}
                />
            </form>
        );
    }
};