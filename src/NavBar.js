import React from "react";
import NavBarItem from './NavBarItem';
import { useLocation } from "react-router-dom";
const NavBar = () => {
    const { pathname } = useLocation();

    // Do not show Nav Bar on base path
    if (pathname === "/") {
        return null;
    }

    return (
        <div className="navbar-container centered">
            <NavBarItem label="About Me" route="/about" first />
            <NavBarItem label="Projects" route="/projects" />
            <NavBarItem label="For Engineers" route="/engineers" />
            <NavBarItem label="Contact Me" route="/contact" />
        </div>
    );
};

export default NavBar;
