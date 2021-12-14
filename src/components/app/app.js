import React from 'react';
import DataBaseMethods from '../../utils/data-base-methods';
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

  removeTodo = (id) => {
    this.setState(({ todos }) => this.dataBaseMethods.removeItem(todos, id));
  };

  editTodo = (id, text) => {
    this.setState(({ todos }) => this.dataBaseMethods.editItem(todos, id, text));
  };

  addTodo = (text, timeout) => {
    this.setState(({ todos }) => this.dataBaseMethods.addItem(todos, this.currentId, text, timeout));
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

  render() {
    const { todos, filter } = this.state;
    const countActive = todos.filter((el) => !el.done).length;

    return (
      <section className="todoapp">
        <Header addTodo={(text, timeout) => this.addTodo(text, timeout)} />
        <section className="main">
          <ItemsList
            currentTab={filter}
            data={todos}
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
