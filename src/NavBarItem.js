import classnames from "classnames";
import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const NavBarItem = ({ label, route, first, altroute }) => {
    const history = useHistory();
    const location = useLocation();
    const className = classnames({
        "underline-from-left": !location.pathname.includes(route) && !location.pathname.includes(altroute),
        "navbar-item-selected": location.pathname.includes(route) || location.pathname.includes(altroute),
    }, "navbar-border navbar-item");

    return (
        <div className={classnames({ "ml-2": !first }, "navbar-item-container centered")} onClick={() => history.push(route)}>
            <span className="navbar-item centered">
                {label}
            </span>
            <div className={className} />
        </div>
    );
};

export default NavBarItem;
