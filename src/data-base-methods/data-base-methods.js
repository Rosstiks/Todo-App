export default class DataBaseMethods {
  createItemData(id, text) {
    return {
      id,
      text,
      done: false,
      createDate: Date.now(),
      currentSessionStart: null,
      currentSession: 0,
      totalSession: 0,
      isActive: false,
      timerID: null,
    };
  }

  addItem(todos, id, text) {
    return {
      todos: [...todos, this.createItemData(id, text)],
    };
  }

  editItem(todos, id, text) {
    const idx = todos.findIndex((el) => el.id === id);
    const newTodo = { ...todos[idx], text };
    const newTodos = [...todos];
    newTodos.splice(idx, 1, newTodo);
    return {
      todos: newTodos,
    };
  }

  removeItem(todos, id) {
    const idx = todos.findIndex((el) => el.id === id);
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    return {
      todos: newTodos,
    };
  }

  changeStatusItem(todos, id, change) {
    const idx = todos.findIndex((el) => el.id === id);
    let newTodo;
    if (change === 'done') {
      newTodo = { ...todos[idx], done: !todos[idx].done };
    } else if (change === 'startTimer') {
      newTodo = todos[idx].isActive
        ? { ...todos[idx] }
        : { ...todos[idx], isActive: true, currentSessionStart: Date.now() };
    } else if (change === 'stopTimer') {
      newTodo = { ...todos[idx], isActive: false, totalSession: todos[idx].currentSession };
    }
    const newTodos = [...todos];
    newTodos.splice(idx, 1, newTodo);
    return {
      todos: newTodos,
    };
  }

  clearDone(todos) {
    const newTodos = todos.filter((el) => !el.done);
    return {
      todos: newTodos,
    };
  }
}
