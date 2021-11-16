import React from "react";
import PropTypes from "prop-types";

import {formatDistanceToNow} from "date-fns";

export default class Task extends React.Component {
    static defaultProps = {
        createDate: Date.now(),
        doneTodo: () => {},
        removeTodo: () => {},
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        doneTodo: PropTypes.func,
        removeTodo: PropTypes.func,
        createDate: PropTypes.number,
    }

    state = {
        edit: false,
    }

    startEditing = () => {
        this.setState({
            edit: true,
        })
    }

    render() {
        const { text, createDate, removeTodo,
                done, doneTodo } = this.props;
        const { edit } = this.state;
        let className = '';
        let checked = false;
        if (done) {
            className += 'completed';
            checked = true;
        }
        if (edit) className += 'editing';

        return (
            <li className={ className }>
                <div className='view'>
                    <input type="checkbox"
                           className='toggle'
                           onChange={ doneTodo }
                           checked={ checked }
                    />
                    <label>
                        <span className='description'>
                            { text }
                        </span>
                        <span className='created'>
                            { formatDistanceToNow(createDate, { includeSeconds: true }) }
                        </span>
                    </label>
                    <button
                        className='icon icon-edit'
                        onClick={ this.startEditing } >
                    </button>
                    <button
                        className='icon icon-destroy'
                        onClick={ removeTodo } >
                    </button>
                </div>
                <input className='edit'
                       defaultValue={ text } />
            </li>
        )
    };
};