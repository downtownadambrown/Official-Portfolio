import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AboutMe from './AboutMe';

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
});

const TabPanel = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="bg-light h-100">
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
                    <Tab label="My Story" {...buildProps(1)} />
                    <Tab label="Projects" {...buildProps(2)} />
                    <Tab label="Get Hired" {...buildProps(3)} />
                    <Tab label="Contact Me" {...buildProps(3)} />
                </Tabs>
            </AppBar>
            <Panel value={value} index={0}>
                <AboutMe />
            </Panel>
            <Panel value={value} index={1}>
                My Life Story
            </Panel>
            <Panel value={value} index={2}>
                Projects
            </Panel>
            <Panel value={value} index={4}>
                Get Hired
            </Panel>
            <Panel value={value} index={5}>
                Contact Me
            </Panel>
        </div>
    );
};

export default TabPanel;
