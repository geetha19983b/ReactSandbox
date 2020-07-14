import React from 'react';

const personprop = ( props ) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default personprop;

//usage

/* <div className="App">
<Person name="Max" age="28" />
<Person name="Manu" age="29" >My Hobbies: Racing</Person>
<Person name="Stephanie" age="26" />
</div> */

