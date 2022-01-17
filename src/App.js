import React from 'react';
import Intro from './Intro';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Engineers from "./Engineers";
import ContactMe from "./ContactMe";
import NavBar from "./NavBar";
import NotFound from "./NotFound";

console.log("======== Now running on AWS ========");

const AppRouter = () => {
    const location = useLocation();

    return (
        <div className="app text-secondary">
            <Switch location={location}>
                <Route path="/" exact>
                    <NavBar />
                    <Intro />
                </Route>
                <Route path="/about" exact>
                    <NavBar />
                    <AboutMe />
                </Route>
                <Route path="/projects" exact>
                    <NavBar />
                    <Projects />
                </Route>
                <Route path="/engineers" exact>
                    <NavBar />
                    <Engineers />
                </Route>
                <Route path="/contact" exact>
                    <NavBar />
                    <ContactMe />
                </Route>
                <Route component={NotFound} />
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
