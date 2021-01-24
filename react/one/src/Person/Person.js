import React from 'react';
import './Person.css';
const person = (props) => {
//Here only function, No Class!
    // return <p>I m a person! i m {Math.floor(Math.random()* 20)} years old</p>
    return (
        <div className="Person">
            {/* <p>I m a {props.name}! I m {props.age} years old</p> */}
            <p onClick={props.click}>I m a {props.name}! I m {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
};
export default person;