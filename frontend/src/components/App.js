import React, {Component} from 'react';
import {render} from 'react-dom';
import Landing from './Landing';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Landing />
            </div>
            
            
        )
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);
//export default App;
