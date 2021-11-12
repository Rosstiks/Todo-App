import React from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  static defaultProps = {
    addTodo: () => {},
  };

  static propTypes = {
    addTodo: PropTypes.func,
  };

  state = {
    newTodoLabel: '',
  };

  onLabelChange = (evt) => {
    this.setState({
      newTodoLabel: evt.target.value,
    });
  };

  onSubmitNewTodo = (evt) => {
    evt.preventDefault();
    const { addTodo } = this.props;
    const { newTodoLabel } = this.state;
    addTodo(newTodoLabel);
    this.setState({
      newTodoLabel: '',
    });
  };

  render() {
    const { newTodoLabel } = this.state;
    return (
      <form onSubmit={this.onSubmitNewTodo}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={newTodoLabel}
        />
      </form>
    );
  }
}
