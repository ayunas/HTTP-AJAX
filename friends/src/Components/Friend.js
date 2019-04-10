import React from 'react';
import faker from 'faker';
import './components.css';



const Friend = (props) => {
    let id = (props.id - 1);
    console.log(props.avatars);

    return (
        
        <address>
            <div>Name: {props.friends[id].name} </div>
            <div>Age:  {props.friends[id].age}   </div>
            <div>email:  {props.friends[id].email} </div>
            <img src={faker.image.avatar()} alt={faker.image.avatar()}/>
        </address>
    
    )
}

export default Friend;
