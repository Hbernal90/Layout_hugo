import React, { Component } from 'react';
import logo from '../../logo.svg';

import  './homepage.styles.css';

export class Homepage extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        )
    }
}

export default Homepage
