import React from "react";
import PropTypes from "prop-types";

export default function TaskFilter({ changeFilter, filter }){

    return (
        <ul className='filters'>
            <li>
                <button
                    onClick={() => changeFilter('All')}
                    className={ filter === 'All' ? 'selected' : null}>
                        All
                </button>
            </li>
            <li>
                <button
                    onClick={() => changeFilter('Active')}
                    className={ filter === 'Active' ? 'selected' : null}>
                        Active
                </button>
            </li>
            <li>
                <button
                    onClick={() => changeFilter('Completed')}
                    className={ filter === 'Completed' ? 'selected' : null}>
                        Completed
                </button>
            </li>
        </ul>
    );
};

TaskFilter.defaultProps = {
    changeFilter: () => {},
    filter: 'All',
}

TaskFilter.propTypes = {
    changeFilter: PropTypes.func,
    filter: PropTypes.oneOf(['All', 'Completed', 'Active']),
}