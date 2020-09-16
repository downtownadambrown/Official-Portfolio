import React from 'react';
import './App.css';
import TabPanel from './TabPanel';
import Intro from './Intro';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";

const AppRouter = () => {
    const location = useLocation();

    return (
        <div className="app">
            <Switch location={location}>
                <Route path="/" exact>
                    <Intro key={0} />
                </Route>
                <Route path="/home">
                    <TabPanel key={1} />
                </Route>
            </Switch>
        </div>
    );
};

const App = () => (
    <div className="h-100">
        <Router>
            <AppRouter />
        </Router>
    </div>
);

export default App;
