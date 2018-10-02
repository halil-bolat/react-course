import React from 'react'; 


const input = (props) => {
    return (
        <div>
            <h3>update username</h3>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}

export default input;