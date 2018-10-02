import React from 'react';

const output = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.text}/>
            <p>{props.name}</p>
        </div>
    )
};

export default output;