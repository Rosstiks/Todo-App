import React from 'react';
import PropTypes from 'prop-types';

export default function ItemsFilter({ changeFilter, filter }) {
  return (
    <ul className="filters">
      <li>
        <button onClick={() => changeFilter('All')} className={filter === 'All' ? 'selected' : null} type="submit">
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => changeFilter('Active')}
          className={filter === 'Active' ? 'selected' : null}
          type="submit"
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={() => changeFilter('Completed')}
          className={filter === 'Completed' ? 'selected' : null}
          type="submit"
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

ItemsFilter.defaultProps = {
  changeFilter: () => {},
  filter: 'All',
};

ItemsFilter.propTypes = {
  changeFilter: PropTypes.func,
  filter: PropTypes.oneOf(['All', 'Completed', 'Active']),
};
