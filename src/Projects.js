import React from 'react';
import portfolioProject from './static/portfolio-project.png';
import bamazonProject from './static/bamazon-project.png';
import dhsComponent from './static/dhs-component.png';
import packagesComponent from './static/packages-component.png';
import HoverableDisplay from "./HoverableDisplay";

const AppProjects = () => {
    return (
        <div className="container d-flex flex-wrap h-100">
            <HoverableDisplay
                className="col-lg-6 col-md-12 appTile d-flex justify-content-center align-items-center"
                title="My Website (this site)"
                subTitle="Built to help Engineers, a lot of love and experimentation went into this app :)"
                technologies={['React', 'Webpack', 'React-Spring', 'React-Router', 'SASS', 'Hooks']}
                ctaText="View More +"
                handleCTAClick={() => {}}
                backgroundURL={portfolioProject}
            />
            <HoverableDisplay
                className="col-lg-6 col-md-12 appTile d-flex justify-content-center align-items-center"
                title="Bamazon"
                subTitle="A full-stack warehouse management app running on Express"
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

const Projects = () => (
        <div className="container d-flex flex-column align-items-center mt-3">
            <div className="sticky">
                <h3 className="font-weight-bold align-self-end show-only-mobile">Projects</h3>
            </div>
            <AppProjects />
            <UIComponents />
        </div>
);

export default Projects;
