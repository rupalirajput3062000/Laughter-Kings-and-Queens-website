import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid py-3" style={{backgroundColor:"black" , color:"white" }}>
                <p>&copy; Copyright by Rupali Rajput</p>
            </div>
         );
    }
}
 
export default Footer;