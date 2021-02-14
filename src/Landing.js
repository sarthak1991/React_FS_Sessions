import React, { Component } from 'react';
import Name from "./Name"
import "./Landing.css"

const studentsClass = [
    {
        studName: "Manish",
        lastName: "Kamti",
        movie: "Iron Man",
    },
    {
        studName: "Sahil",
        lastName: "Debnath",
        movie: "Avengers",
    },
    {
        studName: "Shashank",
        lastName: "Jha",
        movie: "21st Feb",
    }
]
// {studentsClass.forEach(
//     (student) => {
//         return (<Name name={student.studName} lastname={student.lastName} movie={student.movie} /*date={new Date()}*/ ></Name>)
//     }
// )}


// {studentsClass.map(student => <Name name={student.studName} lastname={student.lastName} movie={student.movie} ></Name>)}
class Landing extends Component {
    render() {
        return (
            <div id="parent">
                <Name name="Manish" lastname="Kamti" movie="Iron man"></Name>
                <Name name="Sahil" lastname="Debnath" movie="spiderman"></Name>
                <Name name="Shashank" lastname="Jha" movie="thorman"></Name>
            </div>
        )

    }
}

export default Landing;

// const Landing = () => {
//     return (
//         <div id="parent">
//             This is landing page
//             <Name id="child"></Name>
//         </div>
//     )
// }

// export default Landing