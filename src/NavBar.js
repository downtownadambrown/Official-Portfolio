import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import classnames from 'classnames';

const NavBar = () => {
    const history = useHistory();
    const location = useLocation();

    const NavBarItem = ({ label, route }) => (
        <div className="navbar-item-container centered" onClick={() => history.push(route)}>
            <div className="navbar-item centered">
                {label}
            </div>
            <div className={classnames({ "navbar-selected": location.pathname === route }, "navbar-border navbar-item")} />
        </div>
    );

    return (
        <div className="navbar-container centered">
            <NavBarItem label="About Me" route="/about" />
            <NavBarItem label="Projects" route="/projects" />
            <NavBarItem label="For Engineers" route="/engineers" />
            <NavBarItem label="Contact Me" route="/contact" />
        </div>
    );
};

export default NavBar;
