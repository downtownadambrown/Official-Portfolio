import React, { useState } from 'react';
import './Projects.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import portfolioProject from './static/portfolio-project.png';
import bamazonProject from './static/bamazon-project.png';
import dhsComponent from './static/dhs-component.png';
import packagesComponent from './static/packages-component.png';
import HoverableDisplay from "./HoverableDisplay";

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
        <div className="container d-flex flex-wrap h-100">
            <HoverableDisplay
                className="col-lg-6 col-md-12 appTile d-flex justify-content-center align-items-center"
                title="My Website (this site)"
                subTitle="Built to help Engineers, a lot of love and experimentation went into this app :)"
                technologies={['React', 'React-Spring', 'Material-UI', 'Hooks']}
                ctaText="View More +"
                handleCTAClick={() => {}}
                backgroundURL={portfolioProject}
            />
            <HoverableDisplay
                className="col-lg-6 col-md-12 appTile d-flex justify-content-center align-items-center"
                title="Bamazon"
                subTitle="An Amazon-esque full-stack warehouse management app"
                technologies={['ES6 Javascript', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'HTML5', 'CSS3', 'Bootstrap']}
                ctaText="View More +"
                handleCTAClick={() => {}}
                backgroundURL={bamazonProject}
            />
        </div>
    );
};

const UIComponents = () => {
    return (
        <div className="container d-flex flex-wrap align-self-center justify-self-center h-100">
            <HoverableDisplay
                className="col-lg-6 col-md-12 appTile d-flex justify-content-center align-items-center"
                title="Autotrader.com Feature"
                subTitle="Dealer Home Services"
                technologies={['React', 'Redux', 'Node', 'Express', 'Java/Spring', 'React-Bootstrap']}
                ctaText="View More +"
                handleCTAClick={() => {}}
                backgroundURL={dhsComponent}
            />
            <HoverableDisplay
                className="col-lg-6 col-md-12 appTile d-flex justify-content-center align-items-center"
                title="Autotrader.com Feature"
                subTitle="Vehicle Packages on Listing Card"
                technologies={['React', 'Redux', 'Node', 'Express', 'React-Bootstrap']}
                ctaText="View More +"
                handleCTAClick={() => {
                    //do stuff
                }}
                backgroundURL={packagesComponent}
            />
        </div>
    );
};

/*const OtherProjects = () => (
    <div className="container d-flex flex-wrap align-self-center justify-self-center h-100 align-items-center justify-content-center">
        Coming Soon
    </div>
);*/

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
                {/*<Tab label="Other Projects" />*/}
            </Tabs>
            <TabPanel value={value} index={0} className="d-flex flex-wrap">
                <AppProjects />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <UIComponents />
            </TabPanel>
{/*            <TabPanel value={value} index={2}>
                <OtherProjects />
            </TabPanel>*/}
        </div>
    );
};

export default Projects;
