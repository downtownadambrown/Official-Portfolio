import React from 'react';
import './AboutMe.css';
import adamImage from './static/adam.jpg';
import HowCanIHelp from './HowCanIHelp';

const AboutMe = () => {
    return (
        <div className="container d-flex flex-column align-items-center h-100">
            <h2 className="font-weight-bold text-secondary">About Me</h2>
            <div className="container d-flex align-items-center flex-sm-column flex-lg-row">
                <img
                    alt="Adam Brown"
                    className="adam-image mb-sm-3"
                    src={adamImage}
                    height={243}
                    width={324}
                />
                <div className="text-secondary text-block">
                    <p>Hi there!  I'm Adam Brown from Atlanta GA and I am dedicated to technology, learning, teaching, building, gaming, and so much more.</p>

                    <p>I am currently employed with Cox Automotive working with Autotrader on their Marketplace Delivery Stream / Search Results Page.  We strive to make highly-efficient components for Autotrader.com using React.js and the latest tools following Agile methodologies.</p>

                    <p>My background is anything but traditional, although I did manage to complete a Bachelor's of Science in Mathematics from UGA somehow.  I have always been into programming, but didn't officially pursue the career until 2018 outside of a few contract jobs.</p>
                </div>
            </div>
            <HowCanIHelp />
        </div>
    );
};

export default AboutMe;
