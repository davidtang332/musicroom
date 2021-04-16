import React, {Component} from 'react';
import {render} from 'react-dom';
import Landing from './Landing';
import RoomJoin from './RoomJoin';
import CreateRoom from './CreateRoom';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/join" component={RoomJoin}/>
                    <Route path="/create" component={CreateRoom}/>
                </Switch>
            </Router>
            
            
        )
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);
//export default App;
