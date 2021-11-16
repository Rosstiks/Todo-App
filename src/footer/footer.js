import React from "react";
import TaskFilter from "../tasks-filter/task-filter";

export default function Footer({ clearDone, countActive, changeFilter, filter }) {
    return (
        <footer className='footer'>
            <span className='todo-count'>
                { countActive } items left
            </span>
            <TaskFilter
                changeFilter={(filter) => changeFilter(filter)}
                filter = { filter }
            />
            <button
                className='clear-completed'
                onClick={ clearDone }>
                    Clear completed
            </button>
        </footer>
    );
};