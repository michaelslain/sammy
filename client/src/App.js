import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/header'
import Home from './containers/home'
import About from './containers/about'

export default function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact render={Home} />
                <Route path="/about" render={About} />
            </Switch>
        </Router>
    )
}
