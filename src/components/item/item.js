import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { formatDistanceToNow } from 'date-fns';
import Timer from '../timer';

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
    timeout: PropTypes.number.isRequired,
    currentTab: PropTypes.string.isRequired,
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
    const { text, createDate, removeTodo, done, changeStatusTodo, id, timeout, currentTab } = this.props;
    const { edit } = this.state;
    const classList = classNames({
      completed: done,
      editing: edit,
    });
    let display = 'block';
    if ((done && currentTab === 'Active') || (!done && currentTab === 'Completed')) display = 'none';

    return (
      <li className={classList} style={{ display }}>
        <div className="view">
          <input type="checkbox" className="toggle" onChange={() => changeStatusTodo('done')} checked={done} />
          <label>
            <span className="title">{text}</span>
            <Timer id={id} timeout={timeout} />
            <span className="description">{formatDistanceToNow(createDate, { includeSeconds: true })}</span>
          </label>
          <button className="icon icon-edit" onClick={this.startEditing} type="submit" aria-label="Edit todo" />
          <button className="icon icon-destroy" onClick={removeTodo} type="submit" aria-label="Remove todo" />
        </div>
        <input onKeyDown={this.onEditing} className="edit" defaultValue={text} />
      </li>
    );
  }
}
