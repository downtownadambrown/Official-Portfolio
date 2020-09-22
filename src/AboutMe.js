import React from 'react';
import adamImage from './static/adam.jpg';
import HowCanIHelp from './HowCanIHelp';

const AboutMe = () => {
    return (
        <div className="container d-flex flex-column align-items-center text-secondary">
            <h2 className="font-weight-bold show-only-mobile">About Me</h2>
            <div className="container d-flex align-items-center flex-column flex-lg-row w-100 px-0">
                <img
                    alt="Adam Brown"
                    className="adam-image mb-sm-3 mt-3"
                    src={adamImage}
                    height={243}
                    width={324}
                />
                <div className="text-block">
                    <p>Hi there!  I'm Adam Brown from Atlanta GA and I am dedicated to technology, learning, teaching, building, gaming, and animals.</p>

                    <p>I currently work at Twitch as a Full Stack Engineer.  Previously, I was employed with Cox Automotive working with Autotrader on their Marketplace Delivery Stream / Search Results Page.  I strive to make highly-efficient UI components using React.js on AWS using the latest tools following Agile methodologies.</p>

                    <p>My background is anything but traditional, although at age 28, I managed to complete a Bachelor's of Science in Mathematics from the University of Georgia.  I have always been into programming, but didn't officially pursue the career until 2018 outside of a few contract jobs and freelance work.</p>
                </div>
            </div>
            <div className="text-block">
                <p>As a technical recruiter from 2013-2018, I helped around 40 individuals per year get hired which was a number that consistently put me at the top of my company.  I almost exclusively recruited Engineers of all skill levels with a passion for helping newcomers make that switch.  I used my technical background to connect dots that other people weren't aware of, to stretch jobs and open up managers to alternative solutions that met their needs, and I saw first-hand all the intricacies to this process in terms of how managers operate and hire, how candidates get evaluated and screened, and what really matters in any given job description.</p>
            </div>
            <HowCanIHelp />
        </div>
    );
};

export default AboutMe;
