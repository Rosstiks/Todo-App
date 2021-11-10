import React from "react";
import Task from "../task";

export default function TaskList({ data }) {
    const todos = data.map(el => {
        const {id, ...otherData} = el;
        return (
            <li key={ id }>
                <Task { ...otherData } />
            </li>
        );
    });

    return (
        <ul className='todo-list'>
            { todos }
        </ul>
    )
}