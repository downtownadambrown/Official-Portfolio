import React, {useState} from 'react';
import adamResume from './static/adamresume.pdf';
import adamSummary from './static/adamsummary.pdf';
import NavBarItem from "./NavBarItem";

import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";

const EngineerIntro = () => (
    <div className="container d-flex align-items-center justify-content-center flex-column">
        <h3 className="font-weight-bold align-self-center">Introduction to a Life-Changing Experience in IT</h3>
        <p>Welcome future Engineer!  I couldn't be happier you found this site and are looking to better yourself.  There are a lot of skilled trades in this world and learning how to code is arguably one of the most stable career paths, although it typically won't feel like it when we search for our first job in tech.  It's challenging to learn sufficient material to get hired, let alone getting interviews with 0 professional experience on our resumes.  Everyone whom I have seen dedicate a year of their life to learning technologies has been successfully hired in tech at a salary higher than they expected was possible for their first job.</p>
        <p><span className="font-weight-bold">The Objective of this site</span> is to supply YOU with all the information you need to know if this is right for you, or if you've already begun your adventure -- this can help you land that first job, or at least immediately increase your interview requests.</p>
        <p>Getting there, again, is not easy.  We have our current lives, families, bills, our current job(s) needed to survive.  A year is a reasonable estimate for you to make this change be impactful for yourself, although with more available time, I have seen people get up to speed and hired within 3-4 months.</p>
        <p><span className="font-weight-bold">The difference between those who get hired and those who do not </span>primarily comes down to persistence, motivation, determination, and communication in the job-seeking process.  It is important to realize when you feel beat down by the process, and equally important for you to know how to reel yourself back in.  Talking to people at Meet-ups and building a small network of engineers can really help here.  Communication is incredibly important as that is a tool you can use to generate leads for yourself, we will talk about that more in other parts.</p>
        <p>Like many things in life, you can fully expect to see some failure at first.  What Engineers come to find out is that "failing" an interview as an engineer shows you where your gaps of knowledge are for you to patch up for the next interview.  Then, suddenly, your fifth (or fifteenth) interview goes smoothly.  What?  They want to talk to you again?  Exactly :)</p>
        <p>If you have the right state of mind, it really comes down to generating interview activity for yourself.  Enough practice there and you will suddenly receive your first offer as an engineer.</p>
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
        <p><a href={adamResume} target="_blank" rel="noopener noreferrer">» Here is a link to what my Resume currently looks like «</a></p>
        <h5 className="font-weight-bold">My principles to showcasing your abilities in your resume:</h5>
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
    </div>
);

const EngineerEngagingRecruiters = () => (
    <div className="container d-flex flex-column">
        <h3 className="font-weight-bold align-self-center">How to Engage Recruiters</h3>
        <p>Remember -- It's not just about finding jobs, it's about learning to market yourself successfully to them and the people in hiring positions.  Presenting yourself effectively is over half of the battle.  Ideally, we just want chances to showcase our abilities and the more interviews you take, the better you will get at them.</p>
        <h5 className="font-weight-bold">Types of Recruiters</h5>
        <p>There are recruiters out there for every position in this country, some specialize in certain areas and some work on any position.  There are two different types of recruiters to know about:</p>
        <ul>
            <li>Corporate Recruiters - They work to hire resources to work at their company, usually on internal work.  Example:  Amazon has Technical Recruiters that focus on internal positions at Amazon</li>
            <li>Agency Recruiters - They work for a Staffing Agency that has connections with hiring managers who want them to help present candidates to them.  Sometimes, they offer positions in the form of contract or contract-to-hire where you would be employed by that staffing company working on-site at their client in a contract role with the intent to go full time X months down the road.</li>
        </ul>
        <p>Understanding your audience is important!  Agency Recruiters can help create a continued stream of open positions if you work with them in a productive way to equip them with information and availability on a regular basis.  Corporate recruiters will more facilitate the process in your application process, but won't always be searching to connect you with other openings on your behalf.  Some companies hire strong technical recruiters that come from the agency side because they want to have a blend of both, so be mindful of that as well.  Either way, recruiters are your friends and will help work for you <span className="font-weight-bold">if you can set them up to do so.</span></p>
        <h5 className="font-weight-bold">Working with Recruiters</h5>
        <p>Recruiters work on a number of positions at one time, they are inundated with emails/phone calls/internal meetings and even after having worked as a recruiter for 4 years, there is no guaranteed way to respond to every person I wanted to.  It bothered me for a while that I had to let things slip through the cracks in order to service my clients and their needs first, I was always a candidate-driven recruiter.  There is a fine balance between the two that most recruiters are searching for, but hopefully this helps shed some light on a few things.  I personally don't let recruiters not getting back with me rub me the wrong way -- they either didn't have a fit for me, I wasn't a fit for what we spoke about, or they are waiting for things to progress.  Either way, my approach is to farm as many of these conversations as possible, talk up the recruiter, find out what they have going on, and explain why I may be a good fit for one of those to see if they will submit me to the position.  If I repeat this enough, I will have a steady flow of interviews / new opportunities coming in.  Recruiters are working behind the scenes without you even knowing it.  They will have constant communication with their sales team that partners with managers for their open positions.  As a recruiter, I would get asked constantly throughout my day "who do you have for this?" and you always want your name to come to their mind.</p>
        <h5 className="font-weight-bold">Keep in touch and follow-up with Recruiters!</h5>
        <p>That being said, definitely follow up on a 3-5 day basis depending on what you had going on with them.  If you got submitted to a role, I would check back within 3 business days (phone and email) to see if they have any updates on the position.  If you met a recruiter and nothing quite went anywhere, put them on a list to follow up with them the following week.  A google Excel sheet that can be updated on even your mobile device is my method for tracking my job leads.  You are missing an opportunity (or more than one!) if you aren't tracking your job leads.  The jobs that recruiters are working on changes daily.  New jobs can sometimes need to have people submitted to them ASAP, so you want them to know you are active and hungry for a new job.</p>
        <h5 className="font-weight-bold">Helping recruiters understand your abilities</h5>
        <p>The hardest part of being a recruiter, someone who usually isn't as technical as those you will interview with, is understanding all the technical jargon.  Recruiters learn the names of popular tools and languages, but they rarely understand what problems these tools actually solve and that's OK, they don't necessarily need to for everything.  My goal is to equip the recruiter with a set of information that they can use to promote me to their account managers with the goal of submitting me if I fall within an acceptable window of what they're looking to hire.  This is not easy, but here is how I do that personally:</p>
        <ul>
            <li>In the initial call with a recruiter, I walk them through briefly how I got to where I am.</li>
            <li>When it comes time to mention skills and languages, I mention key concepts that I have learned which I know managers are looking for (for Javascript -- closures & scope, promises, ES6 syntax, some light React.js and Node.js experience, are the main ones I started mentioning)</li>
            <li>I conclude with saying something along the lines of "I know it's hard to know exactly how strong my code is, so after we get off this call, I have a brief summary of information that you may be able to use in your conversations with account managers / hiring managers to gain interest to schedule a technical phone interview with me</li>
        </ul>
        <p>I knew from when I was a recruiter what concepts are popular interview discussions since they are the foundation of working in Javascript, but these aren't anything mysterious if you have worked through learning Javascript.  It's beneficial to give a recruiter tangible information in order for them to turn around to their teammate and say "Hey, I may have found someone, I just had a good talk with someone who may seem more junior than we need, but I have some information that may show they have a lot of potential".  Managers ate this information up and I consistently received feedback that this set me apart from other candidates.</p>
        <p><a href={adamSummary} target="_blank" rel="noopener noreferrer">» My summary which I sent to recruiters strategically «</a></p>
        <p></p>
    </div>
);

const EngineerInterviews = () => (
    <div className="container d-flex flex-column">
        <h3 className="font-weight-bold align-self-center">Preparing for Interviews</h3>
        <p>As you start receiving momentum, you will probably have a moment of panic as things become a bit more 'real', but rest assured that you can do certain things to prepare for your interviews.  The best way to get better at interviewing is by taking interviews!  It is important to first have the right mindset:</p>
        <ul>
            <li className="font-weight-bold align-self-center">You are not going to ace every interview, you are going to struggle with some questions, this is 100% to be expected and normal.</li>
            <p>This is important to fully wrap your head around because what you want to prevent is when you don't know something, for it to throw you off for the next question.  Practicing your fundamentals of your programming language, learn their definitions as well as how to use them properly, learn about the variety of ways you can use these as well.  Experienced hiring individuals will ask a variety of questions that start out basic and get incrementally more difficult as they build on the initial question.  They also want to find out if you understand the core concepts involved.</p>
            <p>For coding practice, I highly recommend working through <a href="https://www.hackerrank.com/">Hackerrank's exercises</a> as a way to learn to solve algorithm-based word problems</p>
            <li className="font-weight-bold align-self-center">Just because you don't know something, doesn't always mean you have then failed your interview or chance at the opportunity.</li>
            <p>There are certain ways that I choose to answer questions that I know I have not learned yet.  Usually what I have found is that I know about the tool / concept they are asking about, I know what it accomplishes, but I just haven't gotten there myself yet.  Speaking to what you DO know goes a long way, even if it's not the information you think they're looking for.  An example would be "Have you ever used Jest before?" to which I would answer in my early career "No, I haven't gotten there yet, but I know Jest is a really popular javascript testing framework and I did a little bit of unit testing using Jasmine at my code camp, so I feel it's something I could grow into quickly".  That type of answer is always better than a plain "No", but I will admit I have had no other choice but to answer "No" a few times because the last thing I want to do is make something up.  My point is -- you can give partial answers that will be rewarded.</p>
            <li className="font-weight-bold align-self-center">For your first job in engineering especially, managers are looking for the right blend of base engineering knowledge mixed with a teachable & positive personality.</li>
            <p>Find a way to have fun with interviews.  You will see how each one helps you build upon the last.  Most importantly, share what you are interested in and let your personality come out a bit.  This is difficult for a lot of people and is probably the most immediate place that will improve by continuing to take interviews and also by talking with recruiters.  Talking with recruiters prepares you for talking with managers.</p>
            <li className="font-weight-bold align-self-center">Have meaningful conversation topics ready</li>
            <p>I have found that listening to a popular podcast on a weekly basis gives me tons of conversation pieces that managers/engineers really enjoy me bringing up.  Sometimes I was asked straight-up if I listen to any podcasts or am into any resources in particular during an interview.  Meet-up groups are also a great way to introduce new conversations and topics related to engineering into your conversation.  I am a video gamer and I have never been shy about asking the person on the other end of the phone/video if they are a gamer or into cars.  Usually people would be into one or the other, which would start a fun little conversation.  People want to hire people they get along with.  Common interests influence their decision.  If you try this and strike out, it might be a sign that you all aren't the right fit which is a benefit to you anyways.</p>
        </ul>
    </div>
);

const Engineers = () => {
    let { path } = useRouteMatch();

    return (
        <div>
{/*            <div className="navbar-container centered mb-3">
                <NavBarItem label="Intro" route="/engineers/intro" first />
                <NavBarItem label="Code Camps" route="/engineers/code-camps" />
                <NavBarItem label="Resume" route="/engineers/resume" />
                <NavBarItem label="Recruiters" route="/engineers/recruiters" />
                <NavBarItem label="Interviews" route="/engineers/interviews" />
            </div>*/}
            <Switch>
                <Route path={`${path}/intro`}>
                    <EngineerIntro />
                </Route>
                <Route path={`${path}/code-camps`}>
                    <EngineerCodeCamps />
                </Route>
                <Route path={`${path}/resume`}>
                    <EngineerResume />
                </Route>
                <Route path={`${path}/recruiters`}>
                    <EngineerEngagingRecruiters />
                </Route>
                <Route path={`${path}/interviews`}>
                    <EngineerInterviews />
                </Route>
            </Switch>
        </div>

    );
};

export default Engineers;
