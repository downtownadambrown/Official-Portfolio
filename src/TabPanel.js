import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
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
                <Typography>{children}</Typography>
            </Box>
        )}
    </div>
);

const buildProps = (index) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        height: '100%',
        '&:focus': {
            opacity: 5,
        },
        'button:focus': 'none',
    },
    tabs: {
        backgroundColor: '#555555',
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
}));

const TabPanel = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    centered
                    className={classes.tabs}
                    value={value}
                    onChange={handleChange}
                    aria-label="tabs"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: 'grey',
                            height: 5,
                        }
                    }}
                >
                    <Tab label="About Me" {...buildProps(0)} />
                    <Tab label="My Story" {...buildProps(1)} />
                    <Tab label="Projects" {...buildProps(2)} />
                    <Tab label="Get Hired" {...buildProps(3)} />
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
        </div>
    );
};

export default TabPanel;
