import React, { useEffect, useRef, useState } from 'react';
import './App.css';


import { useSpring, useTransition, animated, config } from 'react-spring';

import { FaTeamspeak } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";
import { GiF1Car } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";

const Home = () => {
    const ref = useRef([]);
    const [items, set] = useState([]);

    const animatedProps = {
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
                useSpring({ ...animatedProps, delay: 800 }),
                useSpring({ ...secondAnimatedProps.left, delay: 2400 }),
            ]
        },{
            icon: <DiJsBadge className="m-3" size="50px" />,
            label: "Coder",
            springs: [
                useSpring({ ...animatedProps, delay: 1200 }),
                useSpring({ ...secondAnimatedProps.right, delay: 2400 }),
            ],
        },{
            icon: <GiF1Car className="m-3" size="50px" />,
            label: "Engineer",
            springs: [
                useSpring({ ...animatedProps, delay: 1600 }),
                useSpring({ ...secondAnimatedProps.left, delay: 2600 }),
            ],
        },{
            icon: <FaRegLightbulb className="m-3" size="50px" />,
            label: "Mentor",
            springs: [
                useSpring({ ...animatedProps, delay: 2000 }),
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

    useEffect(() => {
        ref.current.map(clearTimeout);
        ref.current = [];
        set([]);
        ref.current.push(setTimeout(() => set(['Hello.']), 250));
        ref.current.push(setTimeout(() => set(['Hello.', 'I\'m Adam Brown.']), 750));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="home d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex  align-items-center flex-column">
                {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                    <animated.div className="transitions-item" key={key} style={rest}>
                        <animated.div style={{ overflow: 'hidden', height: innerHeight, flexDirection: "column" }} className="introTitle">{item}</animated.div>
                    </animated.div>
                ))}
            </div>
            <div className="fluid-container row tile-container">
                {tiles.map((tile, index) => (
                    <div className="col-md-6 col-sm-12" key={`${tile.label}-${tile.delay}`}>
                        <animated.div style={tile.springs[0]} className="">
                            <div className="buttonTile">
                                <div className={`${!(index % 2) ? "flex-md-row-reverse" : ""} d-flex align-items-center`}>
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
        </div>
    );
};

const App = () => {
    const [currentPage] = useState(<Home />);

    return currentPage;
};

export default App;
