import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './navstyle.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Router>
            
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"black"}}>
            <h1 className="navbar-brand">Laughter Kings & Queens</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active ">
           
            <Link to="/" className="nav-link active ">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/about"  className="nav-link">About</Link>
            </li>
            <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
            </ul>
            
            </div>
            </nav>
            </Router>
        );
    }
}

export default Navbar;