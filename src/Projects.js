import React, { useState } from 'react';
import './Projects.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import portfolioProject from './static/portfolio-project.png';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {(value === index) && children}
        </div>
    );
};

const AppProjects = () => {
    return (
        <div className="container d-flex flex-wrap align-self-center justify-self-center h-100">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" style={{ height: 200 }}>
                <div className="bg-dark d-flex justify-content-center" style={{ width: "100%", height: "100%", borderRadius: 15 }}>
                    <img src={portfolioProject} style={{ height: '100%' }} alt="Adam's Portfolio Project" />
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" style={{ height: 200 }}>
                <div className="bg-dark" style={{ width: "100%", height: "100%", borderRadius: 15 }}>

                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" style={{ height: 200 }}>
                <div className="bg-dark" style={{ width: "100%", height: "100%", borderRadius: 15 }}>

                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" style={{ height: 200 }}>
                <div className="bg-dark" style={{ width: "100%", height: "100%", borderRadius: 15 }}>

                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="d-flex flex-column text-secondary">
            <Tabs
                className="mb-4"
                value={value}
                onChange={handleChange}
                textColor="inherit"
                centered
                TabIndicatorProps={{
                    style: {
                        backgroundColor: '#6c757d',
                    }
                }}
            >
                <Tab label="Apps" />
                <Tab label="UI Components" />
                <Tab label="Other Projects" />
            </Tabs>
            <TabPanel value={value} index={0} className="d-flex flex-wrap">
                <AppProjects />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item 2
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item 3
            </TabPanel>
        </div>
    );
};

export default Projects;


/*
*         <div className="container d-flex align-self-center justify-self-center">
            <div className="d-flex flex-grow-1">
                <div className="col-2 p-0">
                    <img src={portfolioProject} width={185} alt="Adam Brown Portfolio Project" />
                    <div className="bottom-centered-strip text-secondary">
                        My Portfolio (this site)
                    </div>
                </div>
                <div className="d-flex flex-column col-10 p-0">
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-row">
                            <div className="col-2 font-weight-bold">Technologies:</div>
                            <div className="col-10">React.js, ES6 Javascript, Memoization, Hooks, SASS, React-Spring, Material UI/Bootstrap</div>
                        </div>
                        <div className="d-flex flex-row mt-2">
                            <div className="col-2 font-weight-bold">Concepts:</div>
                            <div className="col-10">Memoization, Hooks (useState, useEffect, useCallback), Hoisting, Controlled Inputs, Text Masking</div>
                        </div>
                        <div className="d-flex flex-row mt-2">
                            <div className="col-2 font-weight-bold">Description:</div>
                            <div className="col-10">
                                <span>
                                    My goal of building this site was to make it as informative as possible also while creating a unique portfolio experience to help showcase my React development abilities and inspire others.  For this, I chose to use React-Spring for some fun transitions, wanted to leverage as much of Bootstrap as possible for simplicity, but also wanted to get things up and going in a reasonable timeframe which is why I chose to use Material UI for basic components.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
* */
