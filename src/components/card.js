import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <div className="card  mt-5 text-center" style={{width: "18rem"}}>
                <img src={this.props.ImageSrc} className="card-img-top" alt={this.props.name} style={{width:286 , height:286}} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.text}</p>
                    <button className="btn btn-primary">Know More..</button>
                </div>
            </div>
        );
    }
}

export default Card;