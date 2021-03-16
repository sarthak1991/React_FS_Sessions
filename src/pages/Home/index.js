import { useState, useEffect } from "react"

function Home() {
    const [newState, setNewState] = useState("This is the new state's original value")
    const [data, setData] = useState([])
    const [digit, setDigit] = useState(0)
    const [newDigit, setNewDigit] = useState(5)

    useEffect(() => {
        console.clear()
        console.log("re-rendered")
    }, [digit])

    const clickHandler = (e) => {
        setNewState("This is the updated value")
        console.log(data);
    }

    const increment = () => {
        console.log("incremented");
        setDigit(digit + 1)
    }
    const decrement = () => {
        console.log("decremented");
        setNewDigit(newDigit - 1)
    }
    return (
        <div>
            <hr></hr>
            <p>
                Home component starts
                <div>
                    <button onClick={increment}> Increment DIGIT---> </button>
                    <span>{digit}</span>
                    <button onClick={decrement}> Decrement NEW DIGIT---></button>
                    <span>{newDigit}</span>
                </div>


            </p>
            {newState}
            <button onClick={clickHandler}>Update state</button>
            <p>
                Home component ends

            </p>
            <hr></hr>
        </div>
    )
}

export default Home






// import React, { Component } from 'react'

// const URL = "http://jsonplaceholder.typicode.com/posts"

// export default class Home extends Component {
//     state = {
//         second: 2,
//         third: "This is third value",
//         dataFromApi: []
//     }

//     componentDidMount() {
//         fetch(URL)
//             .then(response => response.json())
//             .then(recievedDataFromApi => this.setState({
//                 dataFromApi: recievedDataFromApi
//             }))

//     }

//     render() {
//         return (
//             <div>
//                 {this.state.second}
//             </div>
//         )
//     }
// }

