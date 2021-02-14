import { useState, useEffect } from "react"

function Home() {
    const [newState, setNewState] = useState("This is the new state's original value")
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(recievedDataFromApi => setData(recievedDataFromApi))
            .catch(err => console.log(`This is the error ${err}`))
    }, [])

    const clickHandler = (e) => {
        setNewState("This is the updated value")
        console.log(data);
    }
    return (
        <div>
            {newState}
            <button onClick={clickHandler}>Update state</button>
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

