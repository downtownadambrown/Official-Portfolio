import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import './Home.css';

const interp = i => r => `translate3d(${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0, 0)`;

const Home = () => {

    const { radians } = useSpring({
        to: async next => {
            while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
    });

    const fadeInProps = {
        opacity: 1,
        from: {
            opacity: 0
        },
    };

    const items = [
        {
            label: 'About Me',
            fadeInSpring: useSpring({ ...fadeInProps, delay: 400 }),
            onClick: (e) => { console.log('clicked')},
        }, {
            label: 'Projects',
            fadeInSpring: useSpring({ ...fadeInProps, delay: 800 }),
            onClick: (e) => { console.log('clicked')},
        }, {
            label: 'Learn to Code',
            fadeInSpring: useSpring({ ...fadeInProps, delay: 1200 }),
            onClick: (e) => { console.log('clicked')},
        }, {
            label: 'Get Hired',
            fadeInSpring: useSpring({ ...fadeInProps, delay: 1600 }),
            onClick: (e) => { console.log('clicked')},
        }];

        return (
            <div className="menu-container">
                    {items.map((item, index) => (
                        <animated.div key={index} style={item.fadeInSpring} className="">
                            <animated.div
                                className="script-bf-box"
                                style={{ transform: radians.interpolate(interp(index)) }}
                                onClick={item.onClick}
                            >
                                <div className="button-container">
                                    {item.label}
                                </div>
                            </animated.div>
                        </animated.div>
                    ))}
            </div>
        )
};

export default Home;
