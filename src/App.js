import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Image from './components/image';
import MainContent from './components/mainContent';
import Main2 from './components/mainComponent2';
import Reviews from './components/reviews';
import Footer from './components/footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {  
    return ( 
      <div className="App">
            <Navbar/>
            <Image/>
            <MainContent/>
            <Main2/>
            <Reviews/>
            <Footer/>
      </div>
     );
  }
}
 
export default App;