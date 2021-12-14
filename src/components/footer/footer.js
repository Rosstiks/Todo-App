import React from 'react';
import PropTypes from 'prop-types';
import ItemsFilter from '../items-filter';

export default function Footer({ clearDone, countActive, changeFilter, filter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{countActive} items left</span>
      <ItemsFilter changeFilter={(filter) => changeFilter(filter)} filter={filter} />
      <button className="clear-completed" onClick={clearDone} type="submit">
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  clearDone: () => {},
  changeFilter: () => {},
  filter: 'All',
};

Footer.propTypes = {
  countActive: PropTypes.number.isRequired,
  clearDone: PropTypes.func,
  changeFilter: PropTypes.func,
  filter: PropTypes.oneOf(['All', 'Completed', 'Active']),
};
