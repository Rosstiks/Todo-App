import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import Timer from '../timer';

export default function ItemContent({ id, content, createDate, changeStatusTodo, currentSession }) {
  return (
    <label>
      <span className="title">{content}</span>
      <Timer id={id} currentSession={currentSession} changeStatusTodo={(change) => changeStatusTodo(change)} />
      <span className="description">{formatDistanceToNow(createDate, { includeSeconds: true })}</span>
    </label>
  );
}

ItemContent.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  createDate: PropTypes.number.isRequired,
  changeStatusTodo: PropTypes.func.isRequired,
  currentSession: PropTypes.number.isRequired,
};
