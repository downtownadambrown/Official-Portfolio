import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSpring, useTransition, useTrail, animated, config } from 'react-spring';
import './Intro.css';

import { FaTeamspeak } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";
import { FaRegLightbulb } from "react-icons/fa";
import { AiOutlineTool } from "react-icons/ai";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import Fab from '@material-ui/core/Fab';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { useHistory } from "react-router-dom";

const FollowMe = () => {
    const fadeInProps = {
        marginLeft: 0,
        width: 70,
        from: {
            marginLeft: -80,
            width: 70,
        },
        config: config.wobbly,
    };
    const springs = [
        useSpring({ ...fadeInProps, delay: 3000 }),
        useSpring({ ...fadeInProps, delay: 3250 }),
        useSpring({ ...fadeInProps, delay: 3500 }),
    ];

    return (
        <div className="follow-me">
            <div className="media-bar">
                <a href="https://www.linkedin.com/in/downtownadambrownatl/">
                    <animated.div style={springs[0]}>
                        <LinkedInIcon className="media-bar-icon" style={{ fontSize: 50 }} />
                    </animated.div>
                </a>
            </div>
            <div className="media-bar">
                <a href="https://github.com/downtownadambrown">
                    <animated.div style={springs[1]}>
                        <GitHubIcon className="media-bar-icon" style={{ fontSize: 50 }} />
                    </animated.div>
                </a>
            </div>
            <div className="media-bar">
                <a href="https://www.instagram.com/downtown.adambrown/">
                    <animated.div style={springs[2]}>
                        <InstagramIcon className="media-bar-icon" style={{ fontSize: 50 }} />
                    </animated.div>
                </a>
            </div>
        </div>
    );
};

const Intro = () => {
    let history = useHistory();
    const ref = useRef([]);
    const [items, set] = useState([]);
    const [showItems, setShowItems] = useState(true);

    const fadeInProps = {
        opacity: 1,
        from: {
            opacity: 0
        },
    };

    const secondAnimatedProps = {
        right: {
            config: config.gentle,
            opacity: 1,
            transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
            from: {
                opacity: 0,
                transform: 'translate3d(400px,0,0) scale(2) rotateX(90deg)',
            }
        },
        left: {
            config: config.gentle,
            opacity: 1,
            transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
            from: {
                opacity: 0,
                transform: 'translate3d(-200px,0,0) scale(2) rotateX(90deg)',
            }
        }
    };

    const tiles = [
        {
            icon: <FaTeamspeak className="m-3" size="50px" />,
            label: "Gamer",
            springs: [
                useSpring({ ...fadeInProps, delay: 800 }),
                useSpring({ ...secondAnimatedProps.left, delay: 2400 }),
            ]
        },{
            icon: <DiJsBadge className="m-3" size="50px" />,
            label: "Coder",
            springs: [
                useSpring({ ...fadeInProps, delay: 1200 }),
                useSpring({ ...secondAnimatedProps.right, delay: 2400 }),
            ],
        },{
            icon: <AiOutlineTool className="m-3" size="50px" />,
            label: "Engineer",
            springs: [
                useSpring({ ...fadeInProps, delay: 1600 }),
                useSpring({ ...secondAnimatedProps.left, delay: 2600 }),
            ],
        },{
            icon: <FaRegLightbulb className="m-3" size="50px" />,
            label: "Mentor",
            springs: [
                useSpring({ ...fadeInProps, delay: 2000 }),
                useSpring({ ...secondAnimatedProps.right, delay: 2600 })
            ]
        }
    ];

    const transitions = useTransition(items , null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)' },
        enter: [
            { opacity: 1, height: 40, innerHeight: 40 },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    });

    const iconAnimatedProps = {
        ...fadeInProps,
        from: {
            ...fadeInProps.from,
        }
    };

    const iconSpring = useSpring({ ...iconAnimatedProps, delay: 3000 });

    useEffect(() => {
        ref.current.map(clearTimeout);
        ref.current = [];
        set([]);
        ref.current.push(setTimeout(() => set(['Hello.']), 250));
        ref.current.push(setTimeout(() => set(['Hello.', 'I\'m Adam Brown.']), 750));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = useCallback((e) => {
        e.preventDefault();
        setShowItems(false);
        setTimeout(() => history.push('/home'), 800)
        //history.push('/home');
    }, [history]);

    const introContent = [(
        <div className="d-flex align-items-center flex-column">
            {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                <animated.div className="transitions-item" key={key} style={rest}>
                    <animated.div style={{ overflow: 'hidden', height: innerHeight, flexDirection: "column" }} className="introTitle">{item}</animated.div>
                </animated.div>
            ))}
        </div>
    ),(
        <div className="fluid-container row tile-container">
            {tiles.map((tile, index) => (
                <div className="col-md-6 col-sm-12" key={`${tile.label}-${tile.delay}`}>
                    <animated.div style={tile.springs[0]} className="">
                        <div className="buttonTile">
                            <div className={`${!(index % 2) ? "flex-md-row-reverse" : ""} d-flex align-items-center justify-content-center`}>
                                {tile.icon}
                                <animated.div style={tile.springs[1]}>
                                    <span>{tile.label}</span>
                                </animated.div>
                            </div>
                        </div>
                    </animated.div>
                </div>
            ))}
        </div>
    ),(
        <animated.div style={iconSpring}>
            <Fab tabIndex={-1} onClick={handleClick} style={{ backgroundColor: 'rgb(183, 183, 183)'}}>
                <ArrowForwardIosIcon />
            </Fab>
        </animated.div>
    )];

    const fadeConfig = { mass: 5, tension: 2000, friction: 200 };

    const fadeOut = useTrail(introContent.length, {
        config: fadeConfig,
        opacity: showItems ? 1 : 0,
        x: showItems ? 0 : 20,
        height: showItems ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });

    return (
        <React.Fragment>
            <div className="intro d-flex flex-column align-items-center justify-content-center">
                {fadeOut.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={index}
                        className="trails-text d-flex flex-column align-items-center"
                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`), delay: (1100*(index+1)) }}
                    >
                        {introContent[index]}
                    </animated.div>
                ))}
            </div>
            {/* <FollowMe />*/}
        </React.Fragment>
    );
};

export default Intro;
