import React from 'react';
import './App.css';
import TabPanel from './TabPanel';
import Intro from './Intro';
import classnames from 'classnames';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";

const AppRouter = () => {
    const location = useLocation();
    const { pathname } = location;
    const containerClassName = classnames({
        /*'bg-dark': (pathname === '/'),*/
    }, 'app');

    return (
        <div className={containerClassName}>
            <Switch location={location}>
                <Route path="/" exact>
                    <Intro />
                </Route>
                <Route path="/home">
                    <TabPanel />
                </Route>
            </Switch>
        </div>
    );
};

const App = () => (
    <div className="bg-light h-100">
        <Router>
            <AppRouter />
        </Router>
    </div>
);

export default App;
