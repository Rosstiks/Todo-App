import React from 'react';
import PropTypes from 'prop-types';

import Item from '../item';

export default function ItemsList({ data, removeTodo, changeStatusTodo, editTodo }) {
  const todos = data.map((el) => {
    const { id } = el;
    return (
      <Item
        key={id}
        {...el}
        removeTodo={() => removeTodo(id)}
        changeStatusTodo={(change) => changeStatusTodo(id, change)}
        editTodo={(text) => editTodo(id, text)}
      />
    );
  });

  return <ul className="todo-list">{todos}</ul>;
}

ItemsList.defaultProps = {
  editTodo: () => {},
  removeTodo: () => {},
  changeStatusTodo: () => {},
};

ItemsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func,
  changeStatusTodo: PropTypes.func,
  editTodo: PropTypes.func,
};
