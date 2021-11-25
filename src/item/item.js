import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ItemContent from '../item-content';

export default class Item extends React.Component {
  static defaultProps = {
    createDate: Date.now(),
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    changeStatusTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    createDate: PropTypes.number,
    id: PropTypes.number.isRequired,
    currentSession: PropTypes.number.isRequired,
  };

  state = {
    edit: false,
  };

  startEditing = () => {
    this.setState({ edit: true });
  };

  onEditing = (evt) => {
    const { editTodo } = this.props;
    if (evt.keyCode === 13) {
      editTodo(evt.target.value);
      this.setState({ edit: false });
    } else if (evt.keyCode === 27) {
      this.setState({ edit: false });
    }
  };

  render() {
    const { text, createDate, removeTodo, done, changeStatusTodo, id, currentSession } = this.props;
    const { edit } = this.state;
    const classList = classNames({
      completed: done,
      editing: edit,
    });

    return (
      <li className={classList}>
        <div className="view">
          <input type="checkbox" className="toggle" onChange={() => changeStatusTodo('done')} checked={done} />
          <ItemContent
            content={text}
            createDate={createDate}
            id={id}
            currentSession={currentSession}
            changeStatusTodo={(change) => changeStatusTodo(change)}
          />
          <button className="icon icon-edit" onClick={this.startEditing} type="submit" aria-label="Edit todo" />
          <button className="icon icon-destroy" onClick={removeTodo} type="submit" aria-label="Remove todo" />
        </div>
        <input onKeyDown={this.onEditing} className="edit" defaultValue={text} />
      </li>
    );
  }
}
