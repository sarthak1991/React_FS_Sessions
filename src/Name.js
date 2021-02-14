import { useState } from "react";

// const Name = (props) => {

//     const [currentDate, setCurrentDate] = useState("This is current time")

//     console.log(`This is the props object--> ${props}`);
//     return (
//         <div>
//             Hello, my name is {props.name} {props.lastname}, and my current favorite movie is {props.movie} and today's date is {currentDate}
//         </div>)
// }

// export default Name;

import React, { Component } from 'react';

class Name extends Component {



    render() {

        return (
            <div>
                <button>Click Me</button>
            </div>)
    }

}

export default Name;

