import React, { Component } from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';

export default class ClassComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0
        }
    }

    incrementLikes = () => {
        console.log("Incrementing likes...");
        this.setState({
            likes: this.state.likes + 1
        })
    }

    incrementDislikes = () => {
        console.log("Incrementing dislikes...");
        this.setState({
            dislikes: this.state.dislikes + 1
        })
    }


    render() {
        console.log("render called...");
        return (
            <div className="main">
                <div className="mainDiv">
                    <ClassComponentNotes />
                    <hr />
                    <BiLike onClick={this.incrementLikes} />
                    {this.state.likes}
                    {/* Show Dislikes Count */}
                    <BiDislike onClick={this.incrementDislikes} />
                    {this.state.dislikes}
                </div>
            </div>
        );
    }
}

const ClassComponentNotes = function () {
    return (
        <div>
            <h1>Class Components</h1>
            
            <p>Class components are considered the "React way" of writing components.</p>
            <d1>
                <dt>ES6 JS Classes</dt>
                <dd>Built on these, must understand the basics of JS classes.</dd>
                <dt>Must extend component aka React.component</dt>
                <dd>Again, class components need to entend the React Component.</dd>
                <dt>render()</dt>
                <dd>Class components must always have a render method.</dd>
                <dt>export</dt>
                <dd>Only one class component exported per file.</dd>
            </d1>
        </div>
    )
}