import React from 'react';
import './components.css';


const Friend = (props) => {
    let id = (props.id - 1);
    console.log(props.friends[id].name);

    return (
        
        <address>
            <div>Name: {props.friends[id].name} </div>
            <div>Age:  {props.friends[id].age}   </div>
            <div>email:  {props.friends[id].email} </div>
        </address>
    
    )
}

export default Friend;
