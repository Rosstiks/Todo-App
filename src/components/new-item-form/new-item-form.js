import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewItemForm({ addTodo }) {
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');
  const [text, setText] = useState('');

  const submitNewTodo = (evt) => {
    evt.preventDefault();
    const timeout = (min * 60 || 0) + (+sec || 0);
    addTodo(text, timeout);
    setMin('');
    setSec('');
    setText('');
  };

  return (
    <form className="new-todo-form" onSubmit={submitNewTodo}>
      <input
        name="text"
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={(evt) => setText(evt.target.value)}
        value={text}
        required
      />
      <input
        name="min"
        type="number"
        min="0"
        max="59"
        className="new-todo-form__timer"
        placeholder="Min"
        onChange={(evt) => setMin(evt.target.value)}
        value={min}
      />
      <input
        name="sec"
        type="number"
        min="0"
        max="59"
        className="new-todo-form__timer"
        placeholder="Sec"
        onChange={(evt) => setSec(evt.target.value)}
        value={sec}
      />
      <input type="submit" hidden />
    </form>
  );
}

NewItemForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
