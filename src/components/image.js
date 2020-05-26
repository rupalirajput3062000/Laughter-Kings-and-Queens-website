import React, { Component } from 'react';
import './imagestyle.css'

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Images">
                <div className="Images-div">

                    <h1>Laughing Kings and Queens</h1>
                    <p>
                    There are various peoples in the world , but the peoples that makes other happy are the real hereos of the world  and we salute them to making the world happy.
            </p>
                </div>
            </div>
        );
    }
}

export default Image;