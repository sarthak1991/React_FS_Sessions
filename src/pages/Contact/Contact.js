// import React, { Component } from 'react'

// export default class Contact extends Component {

//     state = {
//         name: "Honnaraju", //Changed this state on event
//         posts: [] // Changed this state on lifecycle method
//     }

//     changeName = () => {
//         console.clear()
//         this.setState({
//             name: "Sarthak"
//         })
//     }

//     componentDidMount = async () => {
//         try {
//             let res = await fetch("http://jsonplaceholder.typicode.com/posts");
//             let articles = await res.json();
//             this.setState(prevState => {
//                 return ({
//                     posts: articles
//                 })
//             })
//         } catch (err) {
//             console.log(err)
//         }

//     }

//     render() {
//         console.log("This is the state");
//         { this.state.posts.map(post => console.log(post.id)) }
//         return (
//             <div>
//                 <p>Hello, my name is {this.state.name}</p>
//                 <button onClick={this.changeName}>change the name</button>

//                 <hr></hr>

//                 <div>
//                     {this.state.posts.map(singlePost => {
//                         return (<div key={singlePost.id}>
//                             <hr></hr>
//                             <div>This is post number {singlePost.id}</div>
//                             <div>This is the title: {singlePost.title}</div>
//                             <hr></hr>
//                         </div>)
//                     }
//                     )
//                     }

//                 </div>
//             </div>
//         )
//     }
// }

import { useState, useEffect } from "react"

const Contact = () => {
    const [nameOfBatchmate, setNameOfBatchmate] = useState("Honnaraju")
    const [posts, setPosts] = useState([])

    useEffect(async () => {
        try {
            let res = await fetch("http://jsonplaceholder.typicode.com/posts");
            let articles = await res.json()
            setPosts(articles)
        } catch (error) {
            console.log(error)
        }
    }, [])

    const clickHandler = () => {
        setNameOfBatchmate("Sarthak")
    }
    return (
        <div>
            <hr></hr>
            <p>
                Contact componenet starts
               </p>
            Hello, my functional component name is {nameOfBatchmate}
            <button onClick={clickHandler}>Click me</button>
            <p>
                Contact component Ends

            </p>
            <hr></hr>
            {/* {posts.map(singlePost => {
                return (
                    <div>

                        <p>this is the post id = {singlePost.id}</p>
                        <p>title = {singlePost.title}</p>
                        
                    </div>
                )
            })} */}
        </div>
    )
}
export default Contact;
