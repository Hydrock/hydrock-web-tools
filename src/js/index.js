import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './home.js';
import About from './about.js';
import Navigation from './nav.js';
import Diff from './helpers/diff.js';

class App extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <Navigation/>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/diff" component={Diff} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));