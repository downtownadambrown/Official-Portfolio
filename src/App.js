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
import {
    EngineerEngagingRecruiters,
    EngineerResume,
    EngineerInterviews,
    EngineerCodeCamps,
    EngineerNavBar,
    EngineerIntro
} from "./Engineers";
import ContactMe from "./ContactMe";
import NavBar from "./NavBar";
import NotFound from "./NotFound";

console.log("======== Now running on AWS (app v1.02) ========");

const AppRouter = () => {
    const location = useLocation();

    return (
        <div className="app text-secondary">
            <NavBar />
            <Switch location={location}>
                <Route path="/" exact>
                    <Intro />
                </Route>
                <Route path="/about">
                    <AboutMe />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path={"/engineers/intro"} exact>
                    <EngineerNavBar />
                    <EngineerIntro />
                </Route>
                <Route path={"/engineers/code-camps"} exact>
                    <EngineerNavBar />
                    <EngineerCodeCamps />
                </Route>
                <Route path={"/engineers/resume"} exact>
                    <EngineerNavBar />
                    <EngineerResume />
                </Route>
                <Route path={"/engineers/recruiters"} exact>
                    <EngineerNavBar />
                    <EngineerEngagingRecruiters />
                </Route>
                <Route path={"/engineers/interviews"} exact>
                    <EngineerNavBar />
                    <EngineerInterviews />
                </Route>
                <Route path="/contact" exact>
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
