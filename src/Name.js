const Name = (props) => {
    console.log(`This is the props object--> ${props}`);
    return (
        <div>
            Hello, my name is {props.name} {props.lastname}, and my current favorite movie is {props.movie}
        </div>)
}

export default Name;

// import React, { Component } from 'react';

// class Name extends Component {

//     render() {
//         return (
//             <div>
//                 Hello, my name is {this.props.name} {this.props.lastname}, and my current favorite movie is {this.props.movie}
//             </div>)
//     }
// }

// export default Name;
