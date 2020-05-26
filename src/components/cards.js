import React from 'react';

function Cards(props){
    return(
        <React.Fragment>
            <div className="card">
            <img className="card-img-top" src={props.src} alt="cap image"/> 
                <div className="card-body">
                        <h1 className="card-title">{props.title}</h1>
                        <p className="card-text">{props.content}</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </React.Fragment>
    )
}



export default Cards;