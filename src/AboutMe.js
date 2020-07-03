import React from 'react';
import './AboutMe.css';
import adamImage from './static/adam.jpg';
import HowCanIHelp from './HowCanIHelp';

const AboutMe = () => {
    return (
        <React.Fragment>
            <div className="container d-flex flex-column align-items-center">
                <h2>About Me</h2>
                <div className="container d-flex align-items-center">
                    <img
                        alt="Adam Brown"
                        className="adam-image"
                        src={adamImage}
                    />
                    <div className="text-block">
                        <p>Hi there!  I'm Adam Brown from Atlanta GA and I am dedicated to technology, learning, teaching, building, gaming, and so much more.</p>

                        <p>I am currently employed with Cox Automotive working with Autotrader on their Marketplace Delivery Stream / Search Results Page.  We strive to make highly-efficient components for Autotrader.com using React.js and the latest tools following Agile methodologies.</p>

                        <p>My background is anything but traditional, although I did manage to complete a Bachelor's of Science in Mathematics from UGA somehow.  I have always been into programming, but didn't officially pursue the career until 2018.</p>
                    </div>
                </div>
{/*                <div className="container d-flex flex-grow-1 mt-3 row">
                    <p>The Purpose of this website is to primarily help engineers get hired.  As a result of my recruiting career, I constantly network with others to help guide engineers towards getting their feet into a career path that is right for them.</p>

                    <p>There is a lot to this, however!  And people other than engineers may also want to learn how I do what I do, network with me, and ask me all kinds of questions related to recruiting Engineers successfully.</p>
                </div>*/}
                <HowCanIHelp />
            </div>
        </React.Fragment>
    );
};

export default AboutMe;
