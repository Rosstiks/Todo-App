import React from 'react';
import PropTypes from 'prop-types';

import NewItemForm from '../new-item-form';

export default function Header({ addTodo }) {
  return (
    <header className="header">
      <h1>Todos</h1>
      <NewItemForm addTodo={(text, timeout) => addTodo(text, timeout)} />
    </header>
  );
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
