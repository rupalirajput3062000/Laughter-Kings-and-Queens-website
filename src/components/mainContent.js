import React, { Component } from 'react';
import './mainContentStyle.css';

import Card from './card';
import Data from './Data';
class MainContent extends Component {

    render() {
        const DataItem = Data.map(item => {
            return (
                <div className="col-lg-4 col-sm-6"  key={item.id}>
                    <Card name={item.name} ImageSrc={item.ImageSrc} text={item.text.substring(0,100)+" ...."} />
                </div>
            )
        });
        return (
            <div className="container-fluid d-flex flex-column image2">
                <h1 style={{ color: "black", textAlign: "center" }}>Meet best 6 Indian Comedians</h1>
                <div className="container">
                    <div className="row mb-5">
                        {DataItem}
                    </div>
                </div>
            </div>

        );
    }
}

export default MainContent;