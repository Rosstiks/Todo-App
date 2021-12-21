import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { formatDistanceToNow } from 'date-fns';
import Timer from '../timer';

export default function Item(props) {
  const { text, createDate, removeTodo, done, changeStatusTodo, id, timeout, currentTab, editTodo } = props;
  const [editing, setEditing] = useState(false);

  const onEditing = (evt) => {
    if (evt.keyCode === 13) {
      editTodo(evt.target.value);
      setEditing(false);
    } else if (evt.keyCode === 27) {
      setEditing(false);
    }
  };

  const classList = classNames({
    completed: done,
    editing,
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
        <button className="icon icon-edit" onClick={() => setEditing(true)} type="submit" aria-label="Edit todo" />
        <button className="icon icon-destroy" onClick={removeTodo} type="submit" aria-label="Remove todo" />
      </div>
      <input onKeyDown={onEditing} className="edit" defaultValue={text} />
    </li>
  );
}

Item.propTypes = {
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

Item.defaultProps = {
  createDate: Date.now(),
};
