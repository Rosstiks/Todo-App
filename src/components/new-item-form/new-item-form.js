import React from 'react';
import PropTypes from 'prop-types';

export default class NewItemForm extends React.Component {
  static defaultProps = {
    addTodo: () => {},
  };

  static propTypes = {
    addTodo: PropTypes.func,
  };

  state = {
    text: '',
    min: '',
    sec: '',
  };

  onInputChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  submitNewTodo = (evt) => {
    evt.preventDefault();
    const { addTodo } = this.props;
    const { text, min, sec } = this.state;
    const timeout = (min * 60 || 0) + (+sec || 0);
    addTodo(text, timeout);
    this.setState({
      text: '',
      min: '',
      sec: '',
    });
  };

  render() {
    const { text, min, sec } = this.state;
    return (
      <form className="new-todo-form" onSubmit={this.submitNewTodo}>
        <input
          name="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onInputChange}
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
          onChange={this.onInputChange}
          value={min}
        />
        <input
          name="sec"
          type="number"
          min="0"
          max="59"
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={this.onInputChange}
          value={sec}
        />
        <input type="submit" hidden />
      </form>
    );
  }
}
