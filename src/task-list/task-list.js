import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task';

export default function TaskList({ data, removeTodo, doneTodo, editTodo }) {
  const todos = data.map((el) => {
    const { id, ...otherData } = el;
    return (
      <Task
        key={id}
        {...otherData}
        removeTodo={() => removeTodo(id)}
        doneTodo={() => doneTodo(id)}
        editTodo={(text) => editTodo(id, text)}
      />
    );
  });

  return <ul className="todo-list">{todos}</ul>;
}

TaskList.defaultProps = {
  editTodo: () => {},
  removeTodo: () => {},
  doneTodo: () => {},
};

TaskList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func,
  doneTodo: PropTypes.func,
  editTodo: PropTypes.func,
};
