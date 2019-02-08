import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import './main.css'

import Navbar from './components/navbar'
import Home from './views/Home'
import About from './views/About'
import Beer from './views/Beer'
import Counter from './views/Counter'

export default class App extends Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/beer/:name/:rate" component={Beer} />
                    <Route path="/counter" component={Counter} />
                </div>
            </HashRouter>
        )
    }
}