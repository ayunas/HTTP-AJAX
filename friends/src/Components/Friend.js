import React from 'react';
import './components.css';


const Friend = (props) => {
    let id = (props.id - 1);
    console.log(props.friends[id].name);

    return <div>{props.friends[id].name}</div>
}

export default Friend;
