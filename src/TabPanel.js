import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';
import LifeStory from './LifeStory';
import Engineers from './Engineers';

const Panel = ({
    children,
    index,
    value,
    ...rest
}) => (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...rest}
    >
        {value === index && (
            <Box p={3}>
                <span>{children}</span>
            </Box>
        )}
    </div>
);

const buildProps = (index) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    key: `simple-tab-${index}`,
});

const TabPanel = () => {
    const [value, setValue] = useState(0);
    const [toggle] = useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const fadeInItems = [(
        <AppBar position="static">
            <Tabs
                centered
                className="bg-secondary"
                value={value}
                onChange={handleChange}
                aria-label="tabs"
                TabIndicatorProps={{
                    style: {
                        backgroundColor: 'white',
                        height: 5,
                    }
                }}
            >
                <Tab label="About Me" {...buildProps(0)} />
                {/*<Tab label="My Story" {...buildProps(1)} />*/}
                <Tab label="Projects" {...buildProps(2)} />
                <Tab label="For Engineers" {...buildProps(3)} />
                <Tab label="Contact Me" {...buildProps(4)} />
            </Tabs>
        </AppBar>
    ), (
        <React.Fragment>
            <Panel value={value} index={0}>
                <AboutMe key={0} />
            </Panel>
{/*            <Panel value={value} index={1}>
                <LifeStory key={1} />
            </Panel>*/}
            <Panel value={value} index={1}>
                <Projects key={1} />
            </Panel>
            <Panel value={value} index={2}>
                <Engineers key={2} />
            </Panel>
            <Panel value={value} index={3}>
                <ContactMe key={3} />
            </Panel>
        </React.Fragment>
    )];

    const config = { mass: 5, tension: 2000, friction: 500 }

    const trail = useTrail(fadeInItems.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 120,
        height: toggle ? 48 : 0,
        from: { opacity: 0, x: 0, height: 0 },
    });

    return (
        <React.Fragment>
            {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                    key={`fade-in-${index}`}
                    className="trails-text"
                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
                >
                    <animated.div style={{ height }}>{fadeInItems[index]}</animated.div>
                </animated.div>
            ))}
        </React.Fragment>
    );
};

export default TabPanel;
