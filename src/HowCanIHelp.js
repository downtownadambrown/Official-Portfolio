import React, { useState, useCallback } from "react";
import './HowCanIHelp.scss';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';

const HowCanIHelp = () => {
    const [accordion, setAccordion] = useState(null);

    const handleClick = useCallback((panel) => {
        setAccordion((panel === accordion) ? null : panel);
    }, [accordion]);

    return (
        <div className="mt-3 d-flex flex-column align-items-center">
            <h4 className="font-weight-bold text-secondary">How can I help? You are:</h4>
            <Accordion
                className="help-accordion"
                expanded={(accordion === "panel3")}
                onChange={() => handleClick('panel3')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <span className="text-secondary font-weight-bold">An Engineer</span>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="text-secondary">
                        <span>Welcome!  You are the main reason made this site!</span>
                        <span>Check out the <Chip size="small" label="For Engineers" /> tab in the top menu where I plan to post a lot of content related to finding a job in technology, how to get started learning, and more.  This is helpful for any level of experience.</span>
                        <span>I look forward to any questions you may have, opinions, and comments in general.  Feel free to connect with me on LinkedIn as well as visit my Github for ideas and discussion!</span>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion
                className="help-accordion"
                expanded={(accordion === "panel1")}
                onChange={() => handleClick('panel1')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <span className="text-secondary font-weight-bold">A Recruiter</span>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="text-secondary ">
                        <span>I worked for 5 years as a recruiter and love connecting with other hiring professionals to talk about strategy, engineering, or simply networking!</span>
                        <span>If you are looking to talk to me about potential opportunities in engineering, I am only open to side contract opportunities and consulting positions at this time.</span>
                        <span>Stay tuned with me -- I am going to be adding a Recruiting Strategies section to this site which can help recruiters find candidates using modern approaches.  These tips helped me hire ~40 engineers per year consistently!  If you want to get there yourself and have a question in the meantime, please feel free to email me.</span>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion
                className="help-accordion"
                expanded={(accordion === "panel2")}
                onChange={() => handleClick('panel2')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <span className="text-secondary font-weight-bold">A Hiring Manager</span>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="text-secondary">
                        <span>Please connect with me on LinkedIn!</span>
                        <span>Feel free to browse my <Chip size="small" label="Projects" /> section at the top as well as my Github <GitHubIcon /></span>
                        <span>I highly appreciate staying in touch with hiring managers and helping wherever I can.  I know a lot of people in the Atlanta and nearby areas, so I am happy to refer people if possible.  I've also helped numerous hiring managers figure out why they were struggling to find the right candidate!  Ask me about it!</span>
                        <span>Any professional career or consulting inquiries are best sent via the <Chip size="small" label="Contact Me" /> tab at the top.  I respond to all inquiries within 1-2 business days.</span>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
};

export default HowCanIHelp;
