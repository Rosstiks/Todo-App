import React, { useState } from 'react';
import Header from '../header';
import ItemsList from '../items-list';
import Footer from '../footer';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [currentId, setCurrentId] = useState(0);

  const createNewTodo = (id, text, timeout) => ({
    id,
    text,
    done: false,
    timeout,
    createDate: Date.now(),
  });
  const addTodo = (text, timeout) => {
    setTodos([...todos, createNewTodo(currentId, text, timeout || 60)]);
    setCurrentId((current) => current + 1);
  };
  const removeTodo = (id) => setTodos(todos.filter((el) => el.id !== id));
  const editTodo = (id, text) => {
    const idx = todos.findIndex((el) => el.id === id);
    const editingTodo = text !== undefined ? { ...todos[idx], text } : { ...todos[idx], done: !todos[idx].done };
    const newTodos = [...todos];
    newTodos.splice(idx, 1, editingTodo);
    setTodos(newTodos);
  };
  const clearDoneTodo = () => setTodos(todos.filter((el) => !el.done));
  const countActive = todos.filter((el) => !el.done).length;

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <section className="main">
        <ItemsList
          currentTab={filter}
          data={todos}
          removeTodo={removeTodo}
          changeStatusTodo={editTodo}
          editTodo={editTodo}
        />
        <Footer clearDone={clearDoneTodo} countActive={countActive} changeFilter={setFilter} filter={filter} />
      </section>
    </section>
  );
}
