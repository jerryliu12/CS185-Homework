import React, { Component } from 'react';
import monkey from '../IMG_8572.jpg'

export class Home extends Component {
    render() {
        return (
            <div className="content">
                <div>
                    <h3>About Me</h3>
                    <p>Welcome to my first website for CS 185 in Spring 2020! I'm a Computer Engineering 4th year, and I expect to graduate in June.</p>
                    <p>I hope to learn a lot from this course, and I'm excited to see how this page progresses over time!</p>
                </div>
                <img src={monkey} alt="This is a picture of a monkey" class="center"></img>
            </div>
        );
    }
}
console.log(console.log(window.location.pathname))
export default Home;
