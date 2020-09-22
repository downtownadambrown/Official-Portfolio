import React, { useState } from "react";
import NavBarItem from './NavBarItem';
import { useLocation, Link } from "react-router-dom";
import classnames from 'classnames';

const titleMap = {
    "/about": "About Me",
    "/projects": "Projects",
    "/contact": "Contact Me",
    "/engineers/intro": "For Engineers > Introduction",
    "/engineers/code-camps": "For Engineers > Code Camps",
    "/engineers/resume": "For Engineers > Resume Formatting",
    "/engineers/recruiters": "For Engineers > Engaging Recruiters",
    "/engineers/interviews": "For Engineers > Interviewing",
};

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
    const title = titleMap[pathname] || 'Error';

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
                        <h2 className="submenu-title underlined">Adam's Portfolio</h2>
                        <div className="menu-links" onClick={handleToggle}>
                            <Link to="/about">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact Me</Link>
                        </div>
                        <h2 className="submenu-title underlined">For Engineers</h2>
                        <div className="submenu" onClick={handleToggle}>
                            <Link to="/engineers/intro">Intro</Link>
                            <Link to="/engineers/code-camps">Code Camps</Link>
                            <Link to="/engineers/resume">Resumes</Link>
                            <Link to="/engineers/recruiters">Engaging Recruiters</Link>
                            <Link to="/engineers/interviews">Interviewing</Link>
                        </div>
                    </div>
                </nav>
                <div className="navbar-container centered">
                    <NavBarItem label="About Me" route="/about" first />
                    <NavBarItem label="Projects" route="/projects" />
                    <NavBarItem label="For Engineers" route="/engineers/intro" altroute="/engineers" />
                    <NavBarItem label="Contact Me" route="/contact" />
                </div>
{/*                <div className="title-container">
                    <h3 className="page-title">{title}</h3>
                </div>*/}
            </header>
    );
};

export default NavBar;
