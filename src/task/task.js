import React from "react";
import {formatDistanceToNow} from "date-fns";
import classNames from 'classnames'

export default class Task extends React.Component {

    state = {
        done: false,
        edit: false,
    }

    startEditing = () => {
        this.setState({
            edit: true,
        })
    }

    doneTodo = () => {
        this.setState(({ done }) => {
            return {
                done: !done,
            }
        })
    }

    render() {
        const { text, createDate, removeTodo } = this.props;
        const { done, edit } = this.state;
        const classList = classNames({
            'completed': done,
            'editing': edit,
        })

        return (
            <li className={ classList }>
                <div className='view'>
                    <input type="checkbox"
                           className='toggle'
                           onChange={this.doneTodo}/>
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
                        onClick={ this.startEditing }>
                    </button>
                    <button
                        className='icon icon-destroy'
                        onClick={removeTodo}>
                    </button>
                </div>
                <input className='edit'
                       defaultValue={text} />
            </li>
        )
    };
};