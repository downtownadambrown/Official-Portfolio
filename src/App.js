import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

import { useSpring, useTransition, animated } from 'react-spring';

import { FaTeamspeak } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";
import { GiF1Car } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";

const Home = () => {
    const ref = useRef([]);
    const [items, set] = useState([]);
    const tiles = [
        {
            icon: <FaTeamspeak className="m-3" size="50px" />,
            label: "Gamer",
            delay: 800,
        },{
            icon: <DiJsBadge className="m-3" size="50px" />,
            label: "Coder",
            delay: 1300,
        },{
            icon: <GiF1Car className="m-3" size="50px" />,
            label: "Engineer",
            delay: 1800,
        },{
            icon: <FaRegLightbulb className="m-3" size="50px" />,
            label: "Mentor",
            delay: 2300,
        }
    ];

    const animatedProps = {
        opacity: 1,
        from: { opacity: 0 },
    };

    const transitions = useTransition(items , null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)' },
        enter: [
            { opacity: 1, height: 40, innerHeight: 40 },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    });

    const reset = useCallback(() => {
        ref.current.map(clearTimeout);
        ref.current = [];
        set([]);
        ref.current.push(setTimeout(() => set(['Hello.']), 250));
        ref.current.push(setTimeout(() => set(['Hello.', 'I\'m Adam Brown.']), 750));
    }, []);

    useEffect(() => void reset(), []);

    return (
        <div className="home d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-md-column flex-sm-row align-items-center">
                {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                    <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
                        <animated.div style={{ overflow: 'hidden', height: innerHeight }} className="introTitle">{item}</animated.div>
                    </animated.div>
                ))}
            </div>
            <div className="fluid-container row tile-container">
                {tiles.map((tile, index) => (
                    <div className="col-md-6 col-sm-12" key={`${tile.label}-${tile.delay}`}>
                        <div className={`buttonTile d-flex align-items-center ${!(index % 2) ? "flex-md-row-reverse" : ""}`}>
                            <animated.div style={useSpring({ ...animatedProps, delay: tile.delay })}>
                                {tile.icon}
                                <span>{tile.label}</span>
                            </animated.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const App = () => {
    const [currentPage, getCurrentPage] = useState(<Home />);

    return currentPage;
};

export default App;
