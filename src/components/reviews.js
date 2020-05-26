import React, { Component } from 'react';
import Card2 from './card2';

class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div  className="reviews text-center">
            <div className=" container">
            <h1 className="pt-5 pb-2">Reviews about Indian Comedians</h1>
            <p>There are numerous comedians in India. we here represented some famous TV comedians, which comes along with their various shows.They make the people laugh with their amazing comedy. </p>
            
               <div className="row pb-5">
               <div className="col-lg-4 col-sm-6">
               <Card2/>
               </div>
               <div className="col-lg-4 col-sm-6">
               <Card2/>
               </div>
               <div className="col-lg-4 col-sm-6">
               <Card2/>
               </div>
               </div>
            </div>
            </div>
         );
    }
}
 
export default Reviews;