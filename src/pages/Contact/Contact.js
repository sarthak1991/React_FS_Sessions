import React, { Component } from 'react'

export default class Contact extends Component {

    state = {
        name: "Honnaraju", //Changed this state on event
        posts: [] // Changed this state on lifecycle method
    }

    changeName = () => {
        console.clear()
        this.setState({
            name: "Sarthak"
        })
    }

    componentDidMount = () => {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(articles => this.setState(prevState => {
                return ({
                    posts: articles
                })
            }))
            .catch(err => console.log(err))
    }

    render() {
        console.log("This is the state");
        { this.state.posts.map(post => console.log(post.id)) }
        return (
            <div>
                <p>Hello, my name is {this.state.name}</p>
                <button onClick={this.changeName}>change the name</button>

                <hr></hr>

                <div>
                    {this.state.posts.map(singlePost => {
                        return (<div>
                            <hr></hr>
                            <div>This is post number {singlePost.id}</div>
                            <div>This is the title: {singlePost.title}</div>
                            <hr></hr>
                        </div>)
                    }
                    )
                    }

                </div>
            </div>
        )
    }
}
