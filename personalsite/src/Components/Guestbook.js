import React, { Component } from 'react';
import config from "../config.js"
const firebase = require('firebase')



export class Guestbook extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            description: '',
            message: '',
            email: '',
            public: false,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            data: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
    }

    componentDidMount(){
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 
        // let ref = firebase.database().ref('message')
        const postsRef = firebase.database().ref('post')
        postsRef.on('value', snapshot => {
            let data = snapshot.val();
            let currPosts = [];
            for (let post in data) {
                if (data[post].publ == true){
                    currPosts.push({
                        id: post,
                        user: data[post].user,
                        desc: data[post].desc,
                        mssg: data[post].mssg,
                        mail: data[post].mail,
                        publ: data[post].publ,
                        time: data[post].time
                    });
                }
            }
            this.setState({
                data: currPosts
            });
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.state.shouldUpdate != prevState.shouldUpdate){
            
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const postRef = firebase.database().ref('post');
        const post = {
            user: this.state.username,
            desc: this.state.description,
            mssg: this.state.message,
            mail: this.state.email,
            publ: this.state.public,
            time: this.state.timestamp
        }
        postRef.push(post);
        if (post.publ == true){
            alert("Message posted!");
        }
        else{
            alert("Message has been sent to Jerry!")
        }
        this.setState({
            username: '',
            description: '',
            message: '',
            email: '',
            public: false,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        })
    }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChangeCheckbox(){
        if (document.getElementById("public").checked == true){
            this.setState({
                public: true
            });
        }
        else{
            this.setState({
                public: false
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Say something!</h2>
                <div className="guestbook">
                    <div className="guestForm">
                        <form id="guestData" onSubmit={this.handleSubmit}>
                            <h2>Write a message</h2>
                            <label for="name">What is your name?</label> <br></br>
                            <input type="text" id="name" name="username" placeholder="Name, from 6 to 19 characters"
                                    onChange={this.handleChange} value={this.state.username}
                                    required minLength="6" maxLength="19" size="22"></input>
                            <br></br>
                            <label for="descrip">Optional short description of yourself:</label> <br></br>
                            <input type="text" id="descrip" name="description" maxLength="100"
                                    onChange={this.handleChange} value={this.state.description}
                                    placeholder="Description, less than 100 characters"></input>
                            <br></br>
                            <label for="msg">Write a message for me and/or others:</label> <br></br>
                            <textarea name="message" placeholder="Your message here... (min 15 characters, max 500)" rows="4" 
                                    onChange={this.handleChange} value={this.state.message}
                                    required minLength="15" maxLength="500"></textarea>
                            <br></br>
                            <label for="email">Optionally leave your email as contact info:</label> <br></br>
                            <input type="text" id="email" name="email" size="30"
                                    onChange={this.handleChange} value={this.state.email}
                                    placeholder="Your Email!"></input>
                            <br></br>
                            <div className="item">
                                <label for="public">Do you want this post to be public?</label>
                                <input id="public" type="checkbox" name="public" width="20"
                                        onChange={this.handleChangeCheckbox} ></input>
                            </div>
                            <br></br>
                            <input type="submit" value="Post"></input>
                        </form>
                    </div>
                    <div className="guestDisplay">
                        <h2>Posted Messages</h2>
                        <ul id="publicPosts">
                            {this.state.data.map((pubPost) => {
                                let timedisplay = new Intl.DateTimeFormat('en-US', {year:'numeric', month:'2-digit', day:'2-digit', hour:'numeric', minute:'2-digit'}).format(pubPost.time);
                                return (
                                    <li key={pubPost.id}>
                                        <h2 id="username">{pubPost.user}</h2>
                                        <p id="timeDisplay">{timedisplay}</p>
                                        <div className="description">
                                            <p>{pubPost.desc}</p>
                                        </div>
                                        <p>{pubPost.mssg}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Guestbook;