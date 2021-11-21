import React from "react";
import {formatDistanceToNow} from "date-fns";
import classNames from 'classnames'

export default class Task extends React.Component {

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
        const classList = classNames({
            'completed': done,
            'editing': edit,
        })

        return (
            <li className={ classList }>
                <div className='view'>
                    <input type="checkbox"
                           className='toggle'
                           onChange={ doneTodo }
                           checked={ done }
                    />
                    <label>
                        <span className='description'>
                            { text }
                        </span>
                        <span className='created'>
                            { formatDistanceToNow(createDate) }
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