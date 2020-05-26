import React, { Component } from 'react';

class Card2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card mt-5 text-center" style={{width: "18rem"}}>
            <div className="card-body">
            <p className="card-text" style={{borderLeft:"5px solid gray"}}>There are numerous comedians in India. we here represented some famous TV comedians, which comes along with their various shows.</p>
            <p>Jane Doe </p>
        </div>
    </div>
         );
    }
}
 
export default Card2;