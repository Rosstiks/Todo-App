export default class DataBaseMethods {
  createItemData(id, text, timeout) {
    return {
      id,
      text,
      done: false,
      timeout,
      createDate: Date.now(),
    };
  }

  addItem(todos, id, text, timeout) {
    return [...todos, this.createItemData(id, text, timeout || 60)];
  }

  editItem(todos, id, text) {
    const idx = todos.findIndex((el) => el.id === id);
    const newTodo = { ...todos[idx], text };
    const newTodos = [...todos];
    newTodos.splice(idx, 1, newTodo);
    return newTodos;
  }

  removeItem(todos, id) {
    const idx = todos.findIndex((el) => el.id === id);
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    return newTodos;
  }

  changeStatusItem(todos, id) {
    const idx = todos.findIndex((el) => el.id === id);
    const newTodo = { ...todos[idx], done: !todos[idx].done };
    const newTodos = [...todos];
    newTodos.splice(idx, 1, newTodo);
    return newTodos;
  }

  clearDone(todos) {
    const newTodos = todos.filter((el) => !el.done);
    return newTodos;
  }
}
