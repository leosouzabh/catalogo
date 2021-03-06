import React from 'react';
import HomePage from './pages/HomePage'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import DetailPage from './pages/DetailPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/v/:product" component={DetailPage} />
            </Switch>
        </Router>
    );
}

export default App;