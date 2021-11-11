import React from "react";
import Task from "../task";

export default function TaskList({ data, removeTodo }) {
    const todos = data.map(el => {
        const {id, ...otherData} = el;
        return <Task key={id} { ...otherData }
                     removeTodo={() => removeTodo(id)} />
    });

    return (
        <ul className='todo-list'>
            { todos }
        </ul>
    )
}