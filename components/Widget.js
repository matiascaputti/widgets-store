import React from 'react';
import ReactDOM from 'react-dom';

const Widget = (props, state) => {
    return (
        <div>
            <h1>{props.txt} - {props.num}!</h1>
            <input type="text"
                onChange={props.updateTxt} />
            <input type="number"
                onChange={props.updateNum} />
        </div>
    )
}

export default Widget