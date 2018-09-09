import React, { Component } from 'react';
import './App.css';

const Grid = () => {
    return (
        <div className="container" style={{ background: 'black', color: 'white' }}>
            <div className="grid-container" style={{ height: '100%' }}>
                <div className="item1">
                    <div className="grid-item-center">Header</div>
                </div>
                <div className="item2">
                    <div className="grid-item-center">Menu</div>
                </div>
                <div className="item3">
                    <div className="grid-item-center">Main</div>
                </div>
                <div className="item3">
                    <div className="grid-item-stretch" style={{ display: 'inline' }}>
                        <div className="wrapper">
                            <div className="one">One</div>
                            <div className="two">Two</div>
                            <div className="three">Three</div>
                            <div className="four">Four</div>
                            <div className="five">Five</div>
                            <div className="six">Six</div>
                        </div>
                    </div>
                </div>
                <div className="item4">
                    <div className="grid-item-center">Right</div>
                </div>
                <div className="item5">
                    <div className="grid-item-center">Footer</div>
                </div>
            </div>
        </div>
    );
}

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid />
            </React.Fragment>
        );
    }
}

export default App;
