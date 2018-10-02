import React from 'react';
import '../styles.css';

const output = (props) => {
    return (
        <div>
            <p className="card">username:{props.user} {props.paragraph2}</p>
            <p className="card">username:{props.user} {props.paragraph}</p>
            <p onClick={props.click}>{props.children}</p>
        </div>
    )
}


export default output;