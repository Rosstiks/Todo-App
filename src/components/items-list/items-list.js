import React from 'react';
import PropTypes from 'prop-types';

import Item from '../item';

export default function ItemsList({ data, removeTodo, changeStatusTodo, editTodo, currentTab }) {
  const todos = data.map((el) => {
    const { id } = el;
    return (
      <Item
        currentTab={currentTab}
        key={id}
        {...el}
        removeTodo={() => removeTodo(id)}
        changeStatusTodo={() => changeStatusTodo(id)}
        editTodo={(text) => editTodo(id, text)}
      />
    );
  });

  return <ul className="todo-list">{todos}</ul>;
}

ItemsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func.isRequired,
  changeStatusTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
};
