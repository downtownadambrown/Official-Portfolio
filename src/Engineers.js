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
        <p>Let's do it!</p>
    </div>
);

const EngineerCodeCamps = () => (
    <div className="container d-flex flex-column">
        <h3 className="font-weight-bold align-self-center">What is a Code Camp and should I attend one?</h3>
        <h5 className="font-weight-bold align-self-center">Code Camps / Code Schools are 3-month cram courses for modern web development skills</h5>
        <p>Around 2013-2014, Javascript-based web frameworks were on the rise and every company was working diligently to implement them in their environments -- Google's Angular.js was the top choice at the time and Facebook's React.js had just come out.  There simply was a heightened demand for Javascript developers than ever before.  Colleges were falling short of providing graduates with turn-key modern tool knowledge -- although a CS degree is highly valuable and someone in this situation can typically learn fast -- but companies needed more than that, they needed someone with actual framework knowledge who could contribute immediately.</p>
        <p>The demand has only increased and so have the number of open source frameworks.  'Code Schools' / 'Code Camps' were slowly started around the nation, initially on the west coast but quickly moved east because of their success.  I personally saw them pop up in Atlanta GA -- first it was just 2 major ones, but within years there were 10 or more reputable code schools.</p>
        <p>The idea is great, actually, because the material to get employed and begin a new career can be learned within 3-6 months if someone is diligent and focused.</p>
        <h5 className="font-weight-bold">Important notes first:</h5>
        <ul>
            <li><span className="font-weight-bold">You do not have to attend a code camp to be successful and/or learn this material.</span>  You can do it for FREE via online learning, one great resource is <a href="https://www.freecodecamp.org">FreeCodeCamp.org</a>.  Also -- check out <a href="https://gumroad.com/l/teach-yourself-to-code">Martha Sharpe's book "Teach Yourself To Code"</a> which I highly recommend.</li>
            <li>Code camps do not guarantee employment -- you will have to work after the course is over to achieve that.  Managers now understand what a code camp is and they are looking for the continued dedication afterwards to ensure they are hiring someone who is interested in continued growth</li>
        </ul>
        <p>This can be a great thing and also a very difficult thing, depending upon your situation.</p>
        <h5 className="font-weight-bold">What I found to be great about a code camp:</h5>
        <ul>
            <li>You get to receive instruction from an actual experienced teacher in the software engineering field who can work with you to help you learn the material</li>
            <li>You get to thrive with your peers by meeting new friends and being able to help each other through each other's problems and tasks</li>
            <li>You have a structured set of curriculum with due dates that help provide structure in a variety of ways</li>
            <li>You get some light assistance from a counselor who tries to help you take the necessary steps to get employed afterwards</li>
            <li>Sometimes your code school will provide some type of 'employment guarantee' of some sort where you may get a refund if you do not get hired -- note that this should not be something you invest any thought into.  It just isnt worth it.  There are usually strings attached here, but either way, in the end getting hired is up to you doing what it takes to get hired.  There is literally too much demand for people like us, you will find a job if you are persistent.</li>
        </ul>
        <h5 className="font-weight-bold">What was difficult or had to be planned before attending:</h5>
        <ul>
            <li>Cost -- the average cost of a code camp OUTSIDE of San Francisco or other expensive west coast locations is $10-15,000.  There are typically financing options available as well as scholarships you can apply for to have the cost reduced.</li>
            <li>You will need to be able to not work for 3-6 months like you had before (unless you're a superhero).  Attending code camp is one thing, but you will need to be able to go home and essentially code constantly, not go to your full or part time job.</li>
            <li>You will need to arrange for health care coverage while not working</li>
            <li>You will need your own laptop.  People showed up on day 1 with new Surface Pros and, while they are nice, they found them to be difficult to code on and wished they had purchased a true laptop.  No you don't need a Mac right out the gates, but it also doesn't hurt if you can afford one!</li>
        </ul>
    </div>
);

const EngineerResume = () => (
    <div className="container d-flex flex-column">
        <h3 className="font-weight-bold align-self-center">Your Resume:  Quick Wins</h3>
        <p>One of the most popular inquiries I receive is in regards to resume assistance.  Here are some general guidelines that I follow when I am formatting someone else's resume, or when I am updating mine.</p>
        <h5>My principles to showcasing your abilities in your resume:</h5>
        <ul>
            <li className="font-weight-bold">Traditional Education at the top (College or University)</li>
            <ul>
                <li>Keep concise and save space, you do not want this to push down the content by more than just a couple lines.</li>
                <li>If you have multiple educations you want to list, condense them into a single line each</li>
                <li>List any awards you received, honors, or relevant extracurriculars concisely as well</li>
            </ul>
            <li className="font-weight-bold">Code Camp education blurb</li>
            <ul>
                <li>Include the specifications around your code camp: 3 months?  6 months?  self-taught?</li>
                <li>List briefly the technical topics that you focused on.  I break mine down into the different parts of the technical stack: 1) Front end tools, 2) Javascript concepts, 3) API/server tools, 4) database tools</li>
            </ul>
            <li className="font-weight-bold">Skill Summary section</li>
            <p>I advise people to avoid creating a section for this.  Why?  When Hiring Managers and Recruiters read your resume, they are looking for qualified skills -- skills that are backed up by definitive experience.  Also, people will use this as a laundry list of anything they have every touched + everything they want to learn but havent actually learned yet.  As a result, there is little stock put into what is in this section on people's resumes.</p>
            <ul>
                <li>Tip:  If you want a technology you have learned to stand out -- build something with it and show that off.</li>
            </ul>
            <li className="font-weight-bold">Professional Experience section</li>
            <ul>
                <li className="font-weight-bold">For Code Camp graduates:</li>
                <ul>
                    <li>My typical recommendation is that if you just graduated a code camp and are looking to find a job in engineering, to not clutter your resume with previous experience that is unrelated.  Remove your retail jobs, your starbucks job, anything that isn't in IT.</li>
                    <li>Instead, fill this section with 2-3 projects that you have made that showcase them in the same manner you would with a job.</li>
                    <li>Title this section "Engineering Projects" (or something similar) instead of "Professional Experience"</li>
                    <li>The trick is making this section read easily -- the information I would include for each of these projects includes:  Project Title that is hyperlinked to the Github repo, Group Size and your Role, 1-2 sentence description of what you were looking to solve with this app, a link to the deployed version of your app, and a clear list of all relevant technologies you used.</li>
                </ul>
            </ul>
            <ul>
                <li className="font-weight-bold">For Engineers with an employment history:</li>
                <ul>
                    <li>1-2 line header per job which includes the company you worked for, geographical location, if you were remote -- mention it here too, duration of employment, and your job title</li>
                    <li>If you received any promotion during your time in this position, have a sub-section for each position under this header so it clearly shows how you advanced</li>
                    <li>Bullet points that cover 1) your role on the team and 2) specifically what technologies you contributed to the development of, and 3) auxillary technologies that you interfaced with but did not dive deep with</li>
                    <li>Rinse and repeat for every job.</li>
                    <li>Be mindful of how far back you want to go.  You will probably want to find ways to keep it under 2 pages if possible.  If you have concerns about this, reach out to me for questions</li>
                </ul>
            </ul>
        </ul>
    </div>);

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
                <EngineerCodeCamps />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <EngineerResume />
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
