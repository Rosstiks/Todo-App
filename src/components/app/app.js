import React, { useState } from 'react';
import DataBaseMethods from '../../utils/data-base-methods';
import Header from '../header';
import ItemsList from '../items-list';
import Footer from '../footer';

export default function App() {
  const methods = new DataBaseMethods();
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [currentId, setCurrentId] = useState(0);

  const removeTodo = (id) => setTodos((todos) => methods.removeItem(todos, id));
  const editTodo = (id, text) => setTodos((todos) => methods.editItem(todos, id, text));
  const addTodo = (text, timeout) => {
    setTodos((todos) => methods.addItem(todos, currentId, text, timeout));
    setCurrentId((current) => current + 1);
  };
  const changeStatusTodo = (id, change) => setTodos((todos) => methods.changeStatusItem(todos, id, change));
  const clearDoneTodo = () => setTodos((todos) => methods.clearDone(todos));
  const countActive = todos.filter((el) => !el.done).length;

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <section className="main">
        <ItemsList
          currentTab={filter}
          data={todos}
          removeTodo={removeTodo}
          changeStatusTodo={changeStatusTodo}
          editTodo={editTodo}
        />
        <Footer clearDone={clearDoneTodo} countActive={countActive} changeFilter={setFilter} filter={filter} />
      </section>
    </section>
  );
}
