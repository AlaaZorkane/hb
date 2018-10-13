import React, { Component } from 'react';
import Landing from './components/Landing.js';

class App extends Component {
    constructor(props) {
        super()
    };
    render() {
        return (
            <div className="AppContainer">
            <Landing />
            </div>
        )
    }
}

export default App;