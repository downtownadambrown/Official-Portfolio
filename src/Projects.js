import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
        <div className="container p-3 d-flex align-self-center justify-self-center">
            <div className="border d-flex flex-grow-1">
                <div className="border col-2 p-3 d-flex justify-content-center" style={{ borderBottomRightRadius: 5, width: 240 }}>
                    My Portfolio (this site)
                </div>
                <div className="d-flex flex-column col-10">
                    <div className="mt-3 d-flex flex-row">
                        <div className="col-3">Technologies used:</div>
                        <div className="col-9">React.js, ES6 Javascript, Memoization, Hooks, SASS, React-Spring, Email.js, Material UI/Bootstrap, React-Text-Mask</div>
                    </div>
                    <div className="col-12 my-3">
                        Lorum ipsum dolor text and repeat. Lorum ipsum dolor text and repeat. Lorum ipsum dolor text and repeat. Lorum ipsum dolor text and repeat. Lorum ipsum dolor text and repeat. Lorum ipsum dolor text and repeat. Lorum ipsum dolor text and repeat. Lorum ipsum dolor text and repeat. Lorum ipsum dolor text and repeat. Lorum ipsum dolor text and repeat.
                    </div>
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
