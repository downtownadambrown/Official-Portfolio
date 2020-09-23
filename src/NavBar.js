import React, { useEffect, useState, useRef } from "react";
import NavBarItem from './NavBarItem';
import { useLocation, Link } from "react-router-dom";
import classnames from 'classnames';

const NavBar = () => {
    const { pathname } = useLocation();
    const [toggle, setToggle] = useState(false);

    // Do not show Nav Bar on base path
    if (pathname === "/") {
        return null;
    }

    const handleToggle = (event) => {
        setToggle(!toggle);
    };

    const classes = classnames('nav', { 'nav--open': toggle });

    return (
            <header className="header" role="banner">
                <nav id="nav" className={classes} role="navigation">
                    <a onClick={handleToggle} className="nav__toggle" role="button" aria-expanded={toggle} aria-controls="menu">
                        <svg className="menuicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                            <title>Toggle Menu</title>
                            <g>
                                <line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5"/>
                                <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                                <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                                <line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5"/>
                                <circle className="menuicon__circle" r="23" cx="25" cy="25"/>
                            </g>
                        </svg>
                    </a>
                    <div className={classnames("menu-overlay", { "menu-overlay-open": toggle })}>
                        <h2 className="submenu-title font-weight-bold">Adam's Portfolio</h2>
                        <div className="submenu">
                            <Link to="/about" className="pb-1" onClick={handleToggle}>About Me</Link>
                            <Link to="/projects" className="pb-1" onClick={handleToggle}>Projects</Link>
                            <Link to="/contact" className="" onClick={handleToggle}>Contact Me</Link>
                        </div>
                        <h2 className="submenu-title font-weight-bold">For Engineers</h2>
                        <div className="submenu">
                            <Link to="/engineers/intro" className="pb-1" onClick={handleToggle}>Intro</Link>
                            <Link to="/engineers/code-camps" className="pb-1" onClick={handleToggle}>Code Camps</Link>
                            <Link to="/engineers/resume" className="pb-1" onClick={handleToggle}>Resumes</Link>
                            <Link to="/engineers/recruiters" className="pb-1" onClick={handleToggle}>Engaging Recruiters</Link>
                            <Link to="/engineers/interviews" className="" onClick={handleToggle}>Interviewing</Link>
                        </div>
                    </div>
                </nav>
                <div className="navbar-container centered">
                    <NavBarItem label="About Me" route="/about" first />
                    <NavBarItem label="Projects" route="/projects" />
                    <NavBarItem label="For Engineers" route="/engineers/intro" altroute="/engineers" />
                    <NavBarItem label="Contact Me" route="/contact" />
                </div>
            </header>
    );
};

export default NavBar;
