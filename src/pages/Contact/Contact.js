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

import { useState, useEffect, useRef } from "react"


const Contact = () => {
    const [nameOfBatchmate, setNameOfBatchmate] = useState("Honnaraju");
    const [posts, setPosts] = useState([])


    let inputRef = useRef()

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
        console.log(inputRef.current.focus());
    }

    return (
        <div>
            Hello, my functional component name is {nameOfBatchmate}
            <button onClick={clickHandler}>Click me</button>
            <div>
                <input id="refThisOut" placeholder="We'll use refs here" ref={inputRef} />
            </div>


            {/* HW --> 
            make a text element
            on click, change text element value to your city. 
            */}

            {/* {posts.map(singlePost => {
                return (
                    <div>
                        <hr></hr>
                        <p>this is the post id = {singlePost.id}</p>
                        <p>title = {singlePost.title}</p>
                        <hr></hr>
                    </div>
                )
            })} */}
        </div>
    )
}
export default Contact;
