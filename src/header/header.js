import React from "react";
import PropTypes from 'prop-types';

import NewTaskForm from "../new-task-form";

export default function Header({ addTodo }) {
    return (
        <header className='header'>
            <h1>Todos</h1>
            <NewTaskForm addTodo={text => addTodo(text)}/>
        </header>
    );
};

Header.defaultProps = {
    addTodo: () => {},
}

Header.propType = {
    addTodo: PropTypes.func,
}