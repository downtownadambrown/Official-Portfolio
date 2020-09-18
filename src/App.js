import React from 'react';
import './App.scss';
import Intro from './Intro';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
import AboutMe from "./AboutMe";
// import Projects from "./Projects";
import Engineers from "./Engineers";
import ContactMe from "./ContactMe";
import NavBar from "./NavBar";

const AppRouter = () => {
    const location = useLocation();

    return (
        <div className="app">
            <NavBar />
            <Switch location={location}>
                <Route path="/" exact>
                    <Intro />
                </Route>
                <Route path="/about" exact>
                    <AboutMe />
                </Route>
                <Route path="/projects" exact>
                    {/*<Projects />*/}
                </Route>
                <Route path="/engineers" exact>
                    <Engineers />
                </Route>
                <Route path="/contact">
                    <ContactMe />
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
