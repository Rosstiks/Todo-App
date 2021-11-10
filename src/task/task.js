import React from "react";
import {formatDistanceToNow} from "date-fns";

export default function Task(props){
    return (
        <div className='view'>
            <input type="checkbox" className='toggle'/>
            <label>
                <span className='description'>{props.text}</span>
                <span className='created'>{formatDistanceToNow(props.createDate)}</span>
            </label>
            <button className='icon icon-edit'></button>
            <button className='icon icon-destroy'></button>
        </div>
    );
};