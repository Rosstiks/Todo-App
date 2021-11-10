import React from "react";
import Header from "../header";
import TaskList from "../task-list";
import Footer from "../footer";

export default function App() {
    const todos = [
        {text: 'test Todo1', createDate: new Date(2021, 10, 1, 2, 3), id: 1},
        {text: 'test Todo1', createDate: new Date(2021, 10, 5, 2, 3), id: 2},
        {text: 'test Todo1', createDate: new Date(2021, 10, 10, 9, 1), id: 3},
    ];

    return (
        <section className='todoapp'>
            <Header />
            <section className='main'>
                <TaskList data={todos} />
                <Footer />
            </section>
        </section>
    )
}