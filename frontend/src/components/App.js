import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

import Landing from './Landing';
import JoinRoom from './JoinRoom';
import CreateRoom from './CreateRoom';
import Room from './Room';
import Info from './Info';



export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route path="/join" component={JoinRoom}/>
                        <Route path="/create" component={CreateRoom}/>
                        <Route path="/room/:roomCode" component={Room}/>
                        <Route path="/info" component={Info}/>
                    </Switch>
                </Router>
            
            
        )
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);
//export default App;
