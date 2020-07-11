import React, {useState} from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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

const EngineerIntro = () => (
    <div className="container d-flex align-items-center justify-content-center flex-column">
        <h5>Introduction to a Life-Changing Experience:</h5>
        <h3>Becoming an Engineer</h3>
        <p>Welcome future Engineer!  I couldn't be happier you found this site and are looking to better yourself.  There are a lot of skilled trades in this world and learning how to code is arguably one of the most stable career paths, although it typically won't feel like it when we search for our first job in tech.  It's challenging to learn sufficient material to get hired, let alone getting interviews with 0 professional experience on our resumes.  Everyone whom I have seen dedicate a year of their life to learning technologies has been successfully hired in tech at a salary higher than they expected was possible for their first job.</p>
        <p><span className="font-weight-bold">The Objective of this site</span> is to supply YOU with all the information you need to know if this is right for you, or if you've already begun your adventure -- this can help you land that first job, or at least immediately increase your interview requests.</p>
        <p>Getting there, again, is not easy.  We have our current lives, families, bills, our current job(s) needed to survive.  A year is a reasonable estimate for you to make this change be impactful for yourself, although with more available time, I have seen people get up to speed and hired within 3-4 months.</p>
        <p><span className="font-weight-bold">The difference between those who get hired and those who do not </span>primarily comes down to persistence, motivation, determination, and communication in the job-seeking process.  It is important to realize when you feel beat down by the process, and equally important for you to know how to reel yourself back in.  Talking to people at Meet-ups and building a small network of engineers can really help here.  Communication is incredibly important as that is a tool you can use to generate leads for yourself, we will talk about that more in other parts.</p>
        <p>Like many things in life, you can fully expect to see some failure at first.  What Engineers come to find out is that "failing" an interview as an engineer shows you where your gaps of knowledge are for you to patch up for the next interview.  Then, suddenly, your fifth (or fifteenth) interview goes smoothly.  What?  They want to talk to you again?  Exactly :)</p>
        <p>If you have the right state of mind, it really comes down to generating interview activity for yourself.  Enough practice there and you will suddenly receive your first offer as an engineer.</p>
        <p>Let's get you to that point.</p>
    </div>
);

const Engineers = () => {
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
                <Tab label="Intro" />
                <Tab label="Code Camps" />
                <Tab label="Resume" />
                <Tab label="Finding Jobs" />
                <Tab label="Interviews" />
                <Tab label="What now?" />
            </Tabs>
            <TabPanel value={value} index={0} className="d-flex flex-wrap">
                <EngineerIntro />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Coming Soon
            </TabPanel>
            <TabPanel value={value} index={2}>
                Coming Soon
            </TabPanel>
            <TabPanel value={value} index={3}>
                Coming Soon
            </TabPanel>
            <TabPanel value={value} index={4}>
                Coming Soon
            </TabPanel>
            <TabPanel value={value} index={5}>
                Coming Soon
            </TabPanel>
        </div>
    );
};

export default Engineers;
