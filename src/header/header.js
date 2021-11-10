import React from "react";
import NewTaskForm from "../new-task-form";

export default function Header() {
    return (
        <header className='header'>
            <h1>Todos</h1>
            <NewTaskForm />
        </header>
    );
};