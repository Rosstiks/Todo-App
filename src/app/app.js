import React from 'react';
import DataBaseMethods from '../data-base-methods';
import Header from '../header';
import ItemsList from '../items-list';
import Footer from '../footer';

export default class App extends React.Component {
  currentId = 0;

  dataBaseMethods = new DataBaseMethods();

  state = {
    todos: [],
    filter: 'All',
  };

  componentDidMount() {
    const saveTodos = JSON.parse(localStorage.getItem('todos'));
    if (saveTodos) {
      this.setState({ todos: saveTodos });
      const lastId = saveTodos.length ? saveTodos[saveTodos.length - 1].id : 0;
      this.currentId = lastId + 1;
    }
    this.updateTimer = setInterval(this.checkActiveTimer, 1000);
  }

  componentDidUpdate() {
    const { todos } = this.state;
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  componentWillUnmount() {
    clearInterval(this.updateTimer);
  }

  removeTodo = (id) => {
    this.setState(({ todos }) => this.dataBaseMethods.removeItem(todos, id));
  };

  editTodo = (id, text) => {
    this.setState(({ todos }) => this.dataBaseMethods.editItem(todos, id, text));
  };

  addTodo = (text) => {
    this.setState(({ todos }) => this.dataBaseMethods.addItem(todos, this.currentId, text));
    this.currentId += 1;
  };

  changeStatusTodo = (id, change) => {
    this.setState(({ todos }) => this.dataBaseMethods.changeStatusItem(todos, id, change));
  };

  clearDone = () => {
    this.setState(({ todos }) => this.dataBaseMethods.clearDone(todos));
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  checkActiveTimer = () => {
    const newTodos = JSON.parse(localStorage.getItem('todos'));
    newTodos.forEach((el) => {
      if (el.isActive) {
        // eslint-disable-next-line no-param-reassign
        el.currentSession = Math.trunc((Date.now() - el.currentSessionStart) / 1000) + el.totalSession;
      }
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos, filter } = this.state;
    const countActive = todos.filter((el) => !el.done).length;
    const renderData =
      // eslint-disable-next-line no-nested-ternary
      filter === 'Active'
        ? todos.filter((el) => !el.done)
        : filter === 'Completed'
        ? todos.filter((el) => el.done)
        : todos;

    return (
      <section className="todoapp">
        <Header addTodo={(text) => this.addTodo(text)} />
        <section className="main">
          <ItemsList
            data={renderData}
            removeTodo={(id) => this.removeTodo(id)}
            changeStatusTodo={this.changeStatusTodo}
            editTodo={this.editTodo}
          />
          <Footer
            clearDone={this.clearDone}
            countActive={countActive}
            changeFilter={this.changeFilter}
            filter={filter}
          />
        </section>
      </section>
    );
  }
}
