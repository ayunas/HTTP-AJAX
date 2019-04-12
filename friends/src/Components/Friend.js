import React from 'react';
import faker from 'faker';
import './components.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons';



const Friend = (props) => {
    let id = (props.id - 1);
    let avatar = props.avatars.map( avatar => Object.values(avatar));

    return (
            <address>
                <FontAwesomeIcon onClick={() => props.deleteFriend(id)}icon={faTimesCircle} size='2x' />
                <div>Name: {props.friends[id].name} </div>
                <div>Age:  {props.friends[id].age}   </div>
                <div>email:  {props.friends[id].email} </div>
                { avatar[id] ? <img src={avatar[id]}/> : <img src={faker.image.avatar()}/> }
            </address>
    )
}

export default Friend;
