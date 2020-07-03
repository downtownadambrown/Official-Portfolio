import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const Content = ({ content }) => {
    switch (content) {
        case 'recruiter':
            return (
                <React.Fragment>
                    <p>I worked for 5 years as a recruiter and love connecting with other hiring professionals to talk about strategy, engineering, or simply networking!</p>
                    <p>If you are looking to talk to me about potential opportunities in engineering, I am only open to side contract opportunities and consulting positions at this time.</p>
                    <p>Stay tuned with me -- I am going to be adding a Recruiting Strategies section to this site which can help recruiters find candidates using modern approaches.  These tips helped me hire ~40 engineers per year consistently!  If you want to get there yourself and have a question in the meantime, please feel free to email me.</p>
                </React.Fragment>
            );
        case 'manager':
            return (
                <React.Fragment>
                    manager
                </React.Fragment>
            );
        case 'engineer':
            return (
                <React.Fragment>
                    engineer
                </React.Fragment>
            );
        default:
            return null;
    }
};

const HowCanIHelp = () => {
    const [content, setContent] = useState(null);

    const handleClick = (e, content) => {
        setContent(content);
    };

    return (
        <div className="d-flex mt-3 flex-column align-items-center">
            <h4>How can I help?</h4>
            <div className="container d-flex flex-grow-1 mt-3 justify-content-center">
                <Button
                    color="grey"
                    variant="contained"
                    className="im-a-button"
                    onClick={(e) => handleClick(e, 'engineer')}
                >
                    I'm an Engineer
                </Button>
                <Button
                    color="grey"
                    variant="contained"
                    className="im-a-button"
                    onClick={(e) => handleClick(e, 'recruiter')}
                >
                    I'm a Recruiter
                </Button>
                <Button
                    color="grey"
                    variant="contained"
                    className="im-a-button"
                    onClick={(e) => handleClick(e, 'manager')}
                >
                    I'm a Hiring Manager
                </Button>
            </div>
            <div className="container mt-3">
                <Content content={content} />
            </div>
        </div>
    )
};

export default HowCanIHelp;
